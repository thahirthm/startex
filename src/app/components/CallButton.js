import React from 'react';

const CallButton = () => {
  const phoneNumber = '1234567890'; // Replace with your phone number

  return (
    <>
      <style>{`
        .call-container {
          position: fixed;
          bottom: 500px; /* Above WhatsApp button if you use both */
          right: 0px;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }


        .call-button {
          position: relative;
          width: 60px;
          height: 60px;
          background-color: #007bff;
              border-radius: 10px 0px 0px 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          font-size: 28px;
          color: white;
          text-decoration: none;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .call-button:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.8);
        }

      
        }
      `}</style>

      <div className="call-container">
        <div className="floating-glow-call" />
        <a
          href={`tel:${phoneNumber}`}
          className="call-button"
          aria-label="Call Us"
        >
          {/* Phone icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.74 3.87.74a1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.34.26 2.66.74 3.87a1 1 0 01-.21 1.11l-2.2 2.2z"/>
          </svg>
        </a>
      </div>
    </>
  );
};

export default CallButton;
