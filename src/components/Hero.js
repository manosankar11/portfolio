import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';
import AboutImg from './AboutImg';
import './Hero.css'
import Logo from './Logo'

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className=' my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      {/* <div className=' ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div> */}
      <div className="About_img">
        <div className='container' ref={container}></div>
      
      <div className="About_logo">
        <Logo />
      </div>
      </div>
      {/* <div className='About max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'>Hi there. I’m Muruganandham</h1>
      </div> */}
    </section>
  );
};

export default Hero;
