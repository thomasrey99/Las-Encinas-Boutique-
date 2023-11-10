import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import io from 'socket.io-client'
const socket = io('http://localhost:3001') //para el chat en vivo

// const Chat = ()=>{
//     const currentUser = useSelector(state => state.user.userLog)
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] =useState([])

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         setMessages([...messages, message])
//         socket.emit('message', message)
//     }

//     useEffect(()=>{
//         socket.on('message',receiveMessage)
//         return ()=>{
//             socket.off('message',receiveMessage)
//         }
//     },[])

//     const receiveMessage = (message) => setMessages((state)=>[...state, message])
//     let user=''
//     currentUser && (user = currentUser.name.toString())
//     return(<div>
//         <form onSubmit={handleSubmit}>
//             <input 
//             type="text" 
//             placeholder='Type your message here'
//             onChange={(e) =>setMessage(e.target.value)}
//             />
//             <button type='submit'>Send</button>
//         </form>

//         <ul>
//             {messages.map((msg, index)=>(
//                 <li key={index}>{user}:{msg}</li>
//             ))}
//         </ul>
//     </div>)

// }

// export default Chat;

// ...

const Chat = () => {
    const currentUser = useSelector(state => state.user.userLog);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Guardar el mensaje junto con el nombre del usuario
      setMessages([...messages, { user: currentUser.name.toString(), text: message }]);
      socket.emit('message', { user: currentUser.name.toString(), text: message });
      setMessage(''); // Limpiar el campo de entrada después de enviar el mensaje
    };
  
    useEffect(() => {
      socket.on('message', receiveMessage);
      return () => {
        socket.off('message', receiveMessage);
      };
    }, []);
  
    const receiveMessage = (message) => setMessages((state) => [...state, message]);
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message here"
            onChange={(e) => setMessage(e.target.value)}
            value={message} // Agregar el valor para controlar el componente de entrada
          />
          <button type="submit">Send</button>
        </form>
  
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              {msg.user}: {msg.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Chat;
  