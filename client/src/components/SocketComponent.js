import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'

const SocketComponent = () =>{

    const [socket] = useState(io(":8000"))

    useEffect(()=>{
        socket.on("client_side", msg=>{
            console.log(msg)
        })
    }, [])

    return(
        <h1>SOCKET</h1>
    )
}
export default SocketComponent;