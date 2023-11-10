import { useEffect, useState } from "react"
import io from 'socket.io-client'
const socket = io('http://localhost:3001') //para el chat en vivo

const Chat = ()=>{
    
    const [message, setMessage] = useState('');
    const [messages, setMessages] =useState([])
    const handleSubmit = (e)=>{
        e.preventDefault();
        socket.emit('message', message)
    }

    useEffect(()=>{
        socket.on('message', message =>{
            console.log(message)
            setMessages([...messages, message])
        })
    },[])

    return(<div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Type your message here'
            name='message'
            value={message}
            onChange={(e) =>setMessage(e.target.value)}
            />
            <button type='submit'>Send</button>
        </form>

        <ul>
            {messages.map((msg, index)=>(
                <li key={index}>{msg}</li>
            ))}
        </ul>
    </div>)

}

export default Chat;