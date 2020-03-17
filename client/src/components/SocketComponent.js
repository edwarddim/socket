import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'

const SocketComponent = () =>{

    const [socket] = useState(io(":8000"))

    useEffect(()=>{
        socket.on("client_side", msg=>{
            console.log(msg)
        })
        socket.on("new_user", msg =>{
            console.log(msg)
        })
    }, [])

    const clickHandler = ()=>{
        socket.emit("click", "Edward Im")
    }

    return(
        <div>
            <h1>SOCKET</h1>
            <button onClick={clickHandler}>Click me!</button>
        </div>
    )
}
export default SocketComponent;