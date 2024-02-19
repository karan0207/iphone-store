/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  gsap.registerPlugin(ScrollTrigger) 

  useEffect(() => {
    const tl2 = gsap.timeline();
  
    tl2.to("#head", {
      opacity: 1,
      y:"-4",
  
      
      duration: 1,
      scrollTrigger: {
        trigger: ".page2",
        start: '0% 20%', // Adjust the trigger start position
        end: '50% 60%', // Adjust the trigger end position
        // scrub: 1, // Smooth scrolling
        // markers:true
      },
    });
  
  }, []);




  return (
    <div className='page2'>
      <div className="content">
      <div className='conts'>
      <h1 id='head'>IPHONE X</h1>
        <p>•6.7-inch Super Retina XDR display</p>
        <p>•Triple 12 MP camera.</p>
        <p>•Improved battery life compared to previous models.</p>
      </div>
        
        
        <div className="gif">
        <img loading="lazy" src="https://media3.giphy.com/media/26n79t82lmj989iAE/giphy.gif?cid=ecf05e47b94lr2977vtip934qj0i89f8n1zs0fpar47clhg7&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default Page;
