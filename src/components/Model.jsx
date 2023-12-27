/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useState } from 'react';
import {Canvas} from '@react-three/fiber';
import Iphone from '../models/Iphone';
import { Html,Text } from '@react-three/drei';

const Model = () => {
    const [isRotating, setIsRotating] = useState(false); 



    const adjustIphoneForScreenSize=()=>{
        let screenScale=0;
        // let screenPosition=[0,-6.5,-43];
        let screenPosition=[-50,-5,-50];
        // let rotation=[0.1,4.7,0]
        let rotation=[0,5,0]
       
      
        if(window.innerWidth<768){
          // screenScale=[0.9,0.9,0.9];
          screenScale=[0.02,0.06,0.05];
          let screenPosition=[-8,4,0];
        }
      //   else if(window.innerWidth<400)
      // {
      //   screenScale=[0.5,0.5,0.5];
      // } 
       else {
        //   screenScale=[1,1,1];
          // screenScale=[1.3,1.3,1.3]
        //   screenScale=[0.08,0.08,0.1];
          screenScale=[0.08,0.09,0.05];
        }
      
        return [screenPosition,screenScale,rotation];
      }
      
      const [islandPosition,islandScale,islandRotation]=adjustIphoneForScreenSize();

      const  minscreen = window.innerWidth<768? true : false;
 


  return (
   <div className="model">
   {/* <div className="leftmodel"> */}
   <Canvas
       className={`canva ${isRotating? 'cursor-grabbing':'cursor-grab'}  ${minscreen? 'mobile':''}`}
      camera={{near:0.1,far:1000}}
     
      >
       <Suspense fallback={null}>
        <directionalLight
           position={[1,1,1]}
           intensity={2}
         />
         <ambientLight
          intensity={0.5}
         />
        <hemisphereLight
          skyColor='#b1e1ff'
          groundColor='#000000'
          intensity={1}
        />
        <Iphone
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
        />
       
       </Suspense>

      
    {/* <Html> */}
    {/* <div className="content">  */}
     {/* <h1 className='canvah1'>NEW GEN IPHONE</h1>
     <h3>Power with beauty</h3> */}
    {/* </div> */}
    {/* </Html> */}

 <Text
  className={`${minscreen? '':'displaynone'}`}
  color="gray"
        fontSize={1}
        maxWidth={100}
        lineHeight={1.4}
        letterSpacing={0.02}
        strokeWidth={"1"}
        // textAlign="center"
        // anchorX="center"
        // anchorY="middle"
        position={[3, 0, 0]}
          
        rotation={[0, 0.4, 0]}>
        
  IPHONE 13 PRO
 </Text>
 <Text
  
  color="black"
        fontSize={0.3}
        maxWidth={100}
        lineHeight={1.4}
        letterSpacing={0.02}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        position={[2.6, -0.8, 0]}
        // rotation={[0, Math.PI / 4, 0]}>
        rotation={[0, 0.2, 0]}>
        
BEAT THE HEAT
 </Text>


      </Canvas>
   {/* </div> */}
    
   </div>
  )
}

export default Model;
