import React,{useState, useEffect} from 'react'
import io from 'socket.io-client'
const SocketComponent = () =>{

    const [socket] = useState(io(":8000"))
    const [state, setState] = useState('')
    const [chat, setChat] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        socket.on("chat_history", data =>{
            setChat(data)
        })
        socket.on("new_message", msg=>{
            setChat(chat =>{
                return [msg, ...chat]
            })
        })

        var promptName = prompt("What is your name??")
        setName(promptName)


    }, [])

    const submitHandler = (e) =>{
        e.preventDefault()
        // setChat(() =>{
        //     return [state, ...chat]
        // })
        socket.emit("send_message" , {
            name:name,
            msg:state
        })
    }

    return(
        <div>
            <h1>SOCKET</h1>
            <form onSubmit={submitHandler}>
                <input onChange={(e) => setState(e.target.value)} />
                <button type="submit">Send</button>
            </form>
            {chat.map((item, i) => (
                <div key={i}>
                    <p>{item.name} says:</p>
                    <p>{item.msg}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}
export default SocketComponent;