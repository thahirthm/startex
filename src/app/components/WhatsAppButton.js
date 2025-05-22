import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // your WhatsApp number
  const message = encodeURIComponent('Hello! I would like to chat.');

  return (
    <>
      <style>{`
        .whatsapp-container {
          position: fixed;
          bottom: 400px;
          right: 0px;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .whatsapp-button {
          position: relative;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          border-radius: 10px 0px 0px 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          font-size: 30px;
          color: white;
          text-decoration: none;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.8);
        }
      `}</style>

      <div className="whatsapp-container">
        <div className="floating-glow" />
        <a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.82 11.82 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.553 4.18 1.6 6.002L0 24l6.157-1.6A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.252-6.22-3.48-8.52zm-8.412 17.193a9.814 9.814 0 01-5.264-1.53l-.377-.228-3.657.949.974-3.55-.246-.369a9.858 9.858 0 1111.13 4.729 9.745 9.745 0 01-2.56-.301zm5.613-6.74c-.3-.15-1.774-.875-2.05-.973-.276-.099-.476-.15-.676.15-.199.3-.768.973-.942 1.172-.173.199-.347.224-.647.075-.3-.15-1.263-.465-2.41-1.48-.89-.794-1.49-1.77-1.665-2.07-.174-.3-.018-.462.13-.611.134-.133.3-.347.45-.52.15-.173.2-.298.3-.498.099-.199.05-.373-.025-.52-.075-.15-.676-1.63-.926-2.237-.243-.59-.49-.511-.675-.52-.174-.01-.374-.01-.573-.01s-.52.074-.792.373c-.272.3-1.04 1.016-1.04 2.47 0 1.454 1.065 2.86 1.214 3.06.15.199 2.09 3.19 5.07 4.47.708.306 1.26.488 1.69.624.71.227 1.36.195 1.87.118.57-.085 1.774-.726 2.025-1.43.25-.705.25-1.31.174-1.43-.075-.12-.274-.198-.574-.347z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
