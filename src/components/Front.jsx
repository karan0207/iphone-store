/* eslint-disable no-unused-vars */
import React, { useEffect  } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Page from "./Page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Window from "./Window";
import Model from "./Model";
import Footer from "./Footer";


const Front = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      const tl = gsap.timeline();
    //   if(window.innerWidth<700 && window.innerWidth>500) {
    //     tl.to("#iphone", {
    //         opacity: 1,
    //         y: "340%",
    //         x: "180%",
      
    //         duration: 1,
    //         scrollTrigger: {
    //           trigger: ".page2",
    //           start: "0% 20%", // Adjust the trigger start position
    //           end: "50% 60%", // Adjust the trigger end position
    //           scrub: 2, // Smooth scrolling
    //           // markers:true
    //         },
    //       });
    //   }
    //   else if(window.innerWidth<500) {
       
    //         tl.to("#iphone", {
    //             opacity: 1,
                
                
                
               
          
    //             duration: 1,
    //             scrollTrigger: {
    //               trigger: ".page2",
    //               start: "0% 20%", // Adjust the trigger start position
    //               end: "50% 60%", // Adjust the trigger end position
    //               scrub: 2, // Smooth scrolling
    //               // markers:true
    //             },
    //           });
          
    //   }
    //     if(window.innerWidth>700){
    //     tl.to("#iphone", {
    //         opacity: 1,
    //         y: "140%",
    //         x: "150%",
      
    //         duration: 1,
    //         scrollTrigger: {
    //           trigger: ".page2",
    //           start: "0% 20%", // Adjust the trigger start position
    //           end: "50% 60%", // Adjust the trigger end position
    //           scrub: 1, // Smooth scrolling
    //           // markers:true
    //         },
    //       });
    //   }
     
    }, []);


  return (
    <div>
      <Navbar/>
      <Home/>
      <Page/>
      <Window/>
      <Model/>
      <Footer/>
    </div>
  )
}

export default Front;
