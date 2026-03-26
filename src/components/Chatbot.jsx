import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Rishabh's assistant. Ask me anything about his skills, education, or projects!", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    const botResponse = getBotResponse(input.toLowerCase());
    
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 600);
  };

  const getBotResponse = (query) => {
    if (query.includes('skill') || query.includes('tech') || query.includes('stack')) {
      return "Rishabh knows Java, C, C++, Python, JavaScript, and frameworks like React, Node.js, and Vite. He's also familiar with Tailwind and Bootstrap.";
    } else if (query.includes('project') || query.includes('build') || query.includes('made')) {
      return "He has built several projects including a fully functional E-Commerce Platform using React/Node.js/Stripe, and a personalized Spotify Clone using React/Express.";
    } else if (query.includes('education') || query.includes('degree') || query.includes('study') || query.includes('college')) {
      return "He is pursuing a B.Tech (2023-2027) from Lovely Professional University. He completed his matriculation and intermediate from DAV Public School Darbhanga.";
    } else if (query.includes('about') || query.includes('who')) {
      return "He is Rishabh Kumar Choudhary, an enthusiastic developer who enjoys building web applications and solving problems.";
    } else if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
      return "Hello! How can I help you learn more about Rishabh today?";
    } else {
      return "I'm sorry, I don't have the answer to that right now. Please reach out to Rishabh at hello@example.com for more support!";
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Assistant</h3>
            <button onClick={toggleChat} className="close-btn" aria-label="Close Chat">&times;</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.isBot ? 'bot' : 'user'}`}>
                <div className="message-content">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input-form" onSubmit={handleSend}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type your question..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      <button className={`chatbot-toggle-btn ${isOpen ? 'active' : ''}`} onClick={toggleChat} aria-label="Toggle Chat">
        {isOpen ? (
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>&times;</span>
        ) : (
          <svg fill="currentColor" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="m20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
            <path d="M7 9h10v2H7zm0-4h10v2H7z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
