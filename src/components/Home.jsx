/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Iphone from '../assets/iphone.png';

const Home = () => {

   useEffect(()=>{

   const heading = document.querySelector(".heading-home");

  
   setTimeout(() => {
    heading.style.backgroundImage = 'none';
  heading.style.color = 'black';
  heading.style.backgroundClip = 'none';
   }, 3000);
   

   },[]);

  return (
    <div className='page1'>
      <div className="left">
        <img id='iphone' src={Iphone} alt="iphone" />
      </div>
      <div className="right">
        <h1 className='heading-home'>IPHONE</h1>
        <p>Powerful. Beautiful. Durable. Check out the new iPhone 15 Pro, iPhone 15 Pro Max, iPhone 15, and iPhone 15 Plus.</p>
      </div>
    </div>
  )
}

export default Home;
