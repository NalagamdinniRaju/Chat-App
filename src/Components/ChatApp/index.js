import React, { useState } from 'react';
import { IoPeopleOutline } from "react-icons/io5";
import "./index.css"

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
const backgroundColorClasses = [
  "bg-red",
  "bg-green",
  "bg-blue",
  "bg-yellow",
  "bg-orange",
  "bg-purple",
  "bg-pink",
  "bg-teal",
  "bg-brown",
  "bg-gray"
];

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');


  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const backgroundClassName = backgroundColorClasses[Math.floor(Math.random() * backgroundColorClasses.length)];
      const time = new Date();
      const messageTime = time.getHours() + ':' + time.getMinutes();
      const newMessage = {
        user: randomUser,
        text: inputText,
        backgroundName: backgroundClassName,
        messageTime,
      };

      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const onClickEnter = (event) => {
    if(event.key ===  'Enter'){
      sendMessage();
    }
  };
  

  return (
    <div className="chat-container">
      <div className='message-area'>
          <div className='introduction-container'>
            <h3>Introduction</h3>
            <p>THis Channel is For Company Wide Chatter</p>
          </div>
          <div className='people-container'>
          <p>{`${messages.length}/100`}</p>
          <IoPeopleOutline size={25} className='contact-icon'/>
          </div>
      </div>
      <hr className='line'/>
      <div className="message-thread">
        
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className={`meesage-profile-inital-container ${message.backgroundName}`}>
                <h1 className='message-name-initial-heading'>{message.user[0]}</h1>
            </div>
            <div className="message-content">
              <div>
                <span className="user">{message.user}</span>
                <span className='time'>{message.messageTime}</span>
              </div>
              <div className='message-text'>
              <p className="text">{message.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={onClickEnter}
        />
      </div>
    </div>
  );
};

export default ChatApp;
