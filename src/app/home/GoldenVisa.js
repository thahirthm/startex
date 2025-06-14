"use client";
import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

 

function GoldenVisa() {
 const playerRef = useRef(null);

     useEffect(() => {
    const tryPlay = () => {
      const player = playerRef.current;
      if (player && player.getInternalPlayer) {
        const internal = player.getInternalPlayer();
        if (internal && internal.play) {
          internal.play().catch(() => {
            // Autoplay blocked
          });
        }
      }
    };
    tryPlay();
  }, []);
    return (
        <div className='px-4 md:px-8 lg:px-[90px] py-20 bg-black'>
            <h6 className='text-secondary font-[300] md:text-[18px] text-[16px] text-center'>Premium service</h6>
            <h2 className='md:text-[55px] text-[30px] font-[600] pt-5 bg-gradient-to-r from-[#EB7C06] to-[#FEDC66] bg-clip-text text-transparent text-center'>GOLDEN VISA</h2>
            <div className="w-full  p-5">
                <ReactPlayer
                   ref={playerRef}
                    url="/assets/images/home/golden2.mp4"
                    playing={true}
                    loop={true}
                    muted={true}
                    controls={false}
                    width="100%"
              
                    playsinline={true}
                    className="md:h-[60%] h-full"
                />
            </div>
            <h4 className=' text-secondary text-center font-[300] text-[22px]'>The golden privilege to premium residents</h4>
            <div className='text-center '>
              <button className="gr-btn mt-8 ">Apply Now</button>
            </div>

        </div>
    );
}

export default GoldenVisa;