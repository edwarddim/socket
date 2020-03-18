const express = require("express")
const app = express()





const server = app.listen(8000, ()=> console.log("EXPRESS ON 8000"))
const io = require('socket.io')(server)

const chat = []

io.on('connection', socket =>{
    socket.emit("chat_history", chat)

    socket.on("send_message", msg => {
        // console.log("The message from the client: ",msg)
        chat.push(msg)
        console.log(chat)
        // socket.broadcast.emit("new_message", msg)
        // socket.emit => to everyone but the sender
        io.emit("new_message", msg)
    })
})