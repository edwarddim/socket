const express = require("express")
const app = express()





const server = app.listen(8000, ()=> console.log("EXPRESS ON 8000"))
const io = require("socket.io")(server)

io.on('connection', socket=>{
    console.log(socket)
})