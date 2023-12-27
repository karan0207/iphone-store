/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';

const Window = () => {
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const tl3 = gsap.timeline();

  //   tl3.to(
  //     ".top",
  //     {  
  //       top: "-50%",

  //       // duration: 1,
  //       scrollTrigger: {
  //         trigger: ".window",
  //         start: "40% 50%", // Adjust the trigger start position
  //         end: "80% 50%",
  //         scrub: 2, // Smooth scrolling

  //         // markers:true
  //       },
  //     },
  //     "animation"
  //   );
  //   tl3.to(
  //     ".bottom",
  //     {
  //       opacity: 0,
  //       bottom: "-50%",

  //       // duration: 1,
  //       scrollTrigger: {
  //         trigger: ".window",
  //         start: "50% 50%", // Adjust the trigger start position
  //         end: "90% 50%",
  //         scrub: 2,

  //         // markers:true
  //       },
  //     },
  //     "animation"
  //   );
  //   tl3.to("#bottomhead", {
  //     opacity: 1,
  //     bottom: "-60%",

  //     // duration: 1,
  //     scrollTrigger: {
  //       trigger: ".window",
  //       start: "50% 50%", // Adjust the trigger start position
  //       end: "90% 50%", // Adjust the trigger end position
  //       scrub: 1, // Smooth scrolling

  //       // markers:true
  //     },
  //   },"animation");
  //   tl3.to("#uphead", {
  //     opacity: 1,
  //     top: "60%",

  //     // duration: 1,
  //     scrollTrigger: {
  //       trigger: ".window",
  //       start: "40% 50%", // Adjust the trigger start position
  //       end: "80% 50%",
  //       scrub: 1, // Smooth scrolling

  //       // markers:true
  //     },
  //   },"animation");
  // }, []);


  useEffect(()=>{

    var tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:".window",
        start:"40% 50%",
        end:"80% 60%",
        scrub:2,
        ease: "power3.easeInOut",
      
      }
    });

   tl2.to(".top",{
    opacity:0,
    top:"-50%"
   },"animation");

   tl2.to(".bottom",{
    opacity:0,
    bottom:"-50%"
   },"animation");

   tl2.to("#uphead",{
     top:"50%"
   },"animation");

   tl2.to("#bottomhead",{
 bottom:"-50%"
   },"animation");

  });

  //    useEffect(()=>{

  //    var tl3 = gsap.timeline({
  //     scrollTrigger:{
  //         trigger:".window",
  //         start:"30% 50%",
  //         end:"70% 60%",
  //         scrub:1,
  //         // pin:true
  //     }
  //    })

  //    tl3.to(".top",{
  //    top:"-50%"
  //    },'a')
  //    tl3.to(".bottom",{
  //    bottom:"-50%"
  //    },'a')

  //    },[])

  return (
    <>
      <div className="window">
        <div className="top">
          <h1 id="uphead">EXPLORE MORE</h1>
        </div>

        <div className="mid">
          <div className="left">
            <h3>iPhone Se</h3>
            <h1>Love the power.</h1>
            <h1>Love the price.</h1>
            <p>From $429 or $17.87/mo. for 24 mo.2</p>
            <button>Buy</button>
          </div>
          <div className="right">
            <img src={pic1} alt="" />
          </div>
        </div>

        <div className="bottom">
          <h1 id="bottomhead">EXPLORE MORE</h1>
        </div>
      </div>
    </>
  );
};

export default Window;
