const express = require("express")
const app = express()





const server = app.listen(8000, ()=> console.log("EXPRESS ON 8000"))
const io = require("socket.io")(server)

io.on('connection', socket=>{
    socket.broadcast.emit("new_user", "a new user has joined")
    // socket.emit("client_side", "hello!!")
    socket.on("click", data => console.log("Clicked!! ", data))
})