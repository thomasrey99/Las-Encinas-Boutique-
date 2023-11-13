import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import io from 'socket.io-client';
import styles from './Chat.module.css'; // Asegúrate de que la ruta sea correcta

const socket = io('http://localhost:3001'); // para el chat en vivo

const Chat = () => {
  const currentUser = useSelector(state => state.user.userLog);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messageListRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { userName: currentUser.name.toString(), text: message };

    // Emitir el mensaje al servidor de Socket.IO
    socket.emit('message', newMessage);

    // Enviar el mensaje a la ruta de tu servidor que espera mensajes
    fetch('http://localhost:3001/messages', {
      method: 'POST', // o el método que uses en tu servidor
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    });

    // Agregar el mensaje al estado local
    setMessages((state) => [...state, newMessage]);

    setMessage('');
  };

  useEffect(() => {
    // Obtener mensajes al montar el componente
    fetch('http://localhost:3001/messages')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error al obtener mensajes:', error));
  }, []);

  useEffect(() => {
    if (messageListRef.current) {
      // Scroll hacia abajo después de que los mensajes se hayan cargado
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const receiveMessage = (message) => {
    // Agregar el mensaje al estado, ya sea del usuario actual o de otros usuarios
    setMessages((state) => [...state, message]);
  };

  useEffect(() => {
    socket.on('message', receiveMessage);
    return () => {
      socket.off('message', receiveMessage);
    };
  }, []);

  return (
    <div>
      <h2 className={styles.titleChat}>Sala de Chat en Vivo</h2>
<div className={styles.container}>
      <ul ref={messageListRef} className={styles.messageList}>
        {messages.map((msg, index) => (
          <li key={index} className={styles.messageItem}>
            <span>{msg.userName}:</span> {msg.text}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className={styles.messageInputContainer}>
        <input
          type="text"
          placeholder="Escribe tu mensaje aquí"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className={styles.messageInput}
        />
        <button type="submit" className={styles.sendButton}>Enviar</button>
      </form>
    </div>
    </div>
    
  );
};

export default Chat; 


