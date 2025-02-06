import React, { useRef, useState } from 'react'
import { useActionState } from 'react';

function Hero() {
 
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;

    const nextVideoRef = useRef(null);

    const handleMiniVdClick = ()=>{
      setHasClicked(true);

      setCurrentIndex((prevIndex)=>{prevIndex + 1})

    }


const getVideoSrc = index => `/public/videos/hero-${index}.mp4`;


const handleVideoLoad = ()=>{
     setLoadedVideos((prev)=>{
      prev + 1;
     })
}

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
                <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                <video src={getVideoSrc(currentIndex + 1)} ref={nextVideoRef}  loop muted id='current-video' className='size-64 origin-center scale-150 object-center object-cover ' 
                onLoadedData={handleVideoLoad} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
