/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './loader.css';
import gsap from 'gsap';
import Background from '../assets/images/bg22.jpg';
import Dotted from '../assets/images/back.png';
import AppleLogo from '../assets/images/applepng.png';
import I from '../assets/images/i.png';
import P from '../assets/images/p2.png';
import H from '../assets/images/h.png';
import O from '../assets/images/o.png';
import N from '../assets/images/n.png';
import E from '../assets/images/e.png';
import kkk from '../assets/images/kkk.svg'

const Loader = () => {

 const navigate = useNavigate();
    
    useEffect(()=>{

        var tl = gsap.timeline();
        tl.to(".Loading", {
          opacity: 0,
          delay: 2.5,
        })
          .to(".loader", {
            // y: "-100%",
            opacity: 0,
            duration: 1,
            ease: "Expo.easeInOut",
          })
          .to(
            ".loader",
            {
              y: "-100%",
              // opacity:0,
              duration: 1,
              // ease: "Expo.easeInOut"
            },
            "up"
          )
          .to(
            ".svgwaala",
            {
              opacity: 1,
              delay: -1.7,
              ease: "Expo.easeInOut",
            },
            "donut"
          )
          .to(
            "#dotted",
            {
              opacity: 1,
              delay: -1.8,
              ease: "Expo.easeInOut",
            },
            "donut"
          )
          .to(
            "#donut",
            {
              opacity: 1,
              scale: 2,
              delay: -1.4,
              ease: "Expo.easeInOut",
              rotationY: "+=15",
              duration: 3,
              rotationX: "+=15",
              rotationZ: "+=15",
            },
            "up"
          )
        
          .from(
            "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
            {
              opacity: 0,
              duration: 1,
              scale: 0,
              top: "40%",
              left: "47%",
            },
            "up"
          );
        
        var tl2 = gsap.timeline();
        
        // document.querySelectorAll("#explore").forEach(function (elem) {
        //   elem.addEventListener("click", function () {
        //     tl2
        //       .to(
        //         "#kothik-k",
        //         {
        //           left: "-15%",
        //           top: "-15%",
        //           scale: "2",
        //           rotate: "25deg",
        //           ease: "ease.out",
        //           duration: 1,
        //         //   opacity: 0,
        //         },
        //         "sw"
        //       )
        //       .to(
        //         "#kothik-o",
        //         {
        //           top: "-20%",
        //           scale: "2",
        //           rotate: "25deg",
        //           ease: "ease.out",
        //           duration: 1,
        //         //   opacity: 0,
        //         },
        //         "sw"
        //       )
        //       .to(
        //         "#kothik-t",
        //         {
        //           left: "115%",
        //           top: "-20%",
        //           scale: "2",
        //           rotate: "25deg",
        //           ease: "ease.out",
        //           duration: 1,
        //         //   opacity: 0,
        //         },
        //         "sw"
        //       )
        //       .to(
        //         "#kothik-h",
        //         {
        //           left: "115%",
        //           top: "110%",
        //           scale: "2",
        //           rotate: "25deg",
        //           ease: "ease.out",
        //           duration: 1,
        //         //   opacity: 0,
        //         },
        //         "sw"
        //       )
        //       .to(
        //         "#kothik-i",
        //         {
        //           left: "35%",
        //           top: "120%",
        //           scale: "2",
        //           rotate: "25deg",
        //           ease: "ease.out",
        //           duration: 1,
        //         //   opacity: 0,
        //         },
        //         "sw"
        //       )
        //       .to(
        //         "#kothik-k2",
        //         {
        //           left: "-15%",
        //           top: "80%",
        //           scale: "2",
        //           rotate: "25deg",
        //           ease: "ease.out",
        //           duration: 1,
        //         //   opacity: 0,
        //         },
        //         "sw"
        //       )
        //       .to("#donut", {
        //         width: "80vw",
        //         top: "-10%",
        //         rotate: "360deg",
        //         ease: "ease.out",
        //         duration: 1,
        //         opacity: 0,
        //         delay: "-1",
        //       })
        //       .to(
        //         "#dotted",
        //         {
        //           opacity: 0,
        //         },
        //         "sw"
        //       )
        //       .to(".svgwaala", {
        //         opacity: 0,
        //       });
        //   });
        });





    

  const handleClick=()=>{
    navigate('/Home');
};

  return (
    <div id="main">
      <div className="loader">
        <h2 className="zoom">IPHONE</h2>
        <h1 className="scramble">IPHONE</h1>
        <div className="Loading"></div>
      </div>
      <div className="svgwaala">
        <div id="dotted">
          <img id="donut" src={''} alt="" />
          <img id="kothik-k" src={I} alt="i" />
          <img id="kothik-k2" src={P} alt="p" />
          <img id="kothik-o" src={H} alt="h" />
          <img id="kothik-t" src={O} alt="o" />
          <img id="kothik-h" src={N} alt="n" />
          <img id='iphone-i' src={I} alt="i" />
          <img id='iphone-p' src={P} alt="p" />
          <img id='iphone-h' src={H} alt="h" />
          <img id='iphone-o' src={O} alt="o" />
          <img id='iphone-n' src={N} alt="n" />
          <img id='iphone-e' src={E} alt="e" />
        </div>
        <div id="explore">
          {/* <h1 >Explore</h1> */}
          <button onClick={()=>navigate('/Home')}>Explore</button>
        </div>
      </div>
    </div>
  )
}

export default Loader;
