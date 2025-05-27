
import React, { useEffect, useState } from 'react';

export default function PopupForm({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
    // Trigger the animation after mount
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#0000008a]">
        <div
        className={`bg-gradient p-9 w-[90%] max-w-md shadow-xl relative transform transition-all duration-500 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-black text-xl w-[30px] h-[30px] rounded-[90px] flex justify-center items-center bg-white">×</button>
        <h2 className="text-white pt-5 text-[30px] font-[400] mb-2">Start Your <br />Entrepreneurial Journey</h2>
        <p className="text-white text-[18px] mb-4">Take the first step to your success.</p>
        <form className="space-y-5">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-white" />
          <div className="flex bg-white rounded" >
            <select className="p-2 rounded-l">
              <option value="+91">+91</option>
              {/* Add more country codes if needed */}
            </select>
            <input type="text" placeholder="Mobile Number" className="w-full p-2 rounded-r" />
          </div>
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-white" />
          <textarea placeholder="Message" className="w-full p-2 rounded h-24 bg-white"></textarea>
          <button type="submit" className="bg-black text-white py-2 px-4 rounded w-full">Submit</button>
        </form>
      </div>
    </div>
  );
}