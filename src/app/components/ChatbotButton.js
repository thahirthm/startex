import React from 'react';

const ChatbotButton = ({ onClick }) => {
  return (
    <>
      <style>{`
        .chatbot-container {
          position: fixed;
          bottom: 300px; /* stacked above Call & WhatsApp buttons */
          right: 10px;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

       

        .chatbot-button {
          position: relative;
          width: 60px;
          height: 60px;
            background: var(--main, linear-gradient(90deg, #ff572f 0%, #ffad20 100%));
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
  
          font-size: 28px;
          color: white;
          text-decoration: none;
          z-index: 1;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .chatbot-button:hover {
          transform: scale(1.1);
        
        }

        }
      `}</style>

      <div className="chatbot-container">
        <div className="floating-glow-chatbot" />
        <button
          className="chatbot-button"
          aria-label="Open Chatbot"
          onClick={onClick}
        >
          {/* Chat bubble icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zM6 11h12v2H6v-2zm0-3h12v2H6V8z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ChatbotButton;
