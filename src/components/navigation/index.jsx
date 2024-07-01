"use client"
import React from 'react'
import {BtnList} from "@/app/data"
import NavButton from './NavButton';

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length; 
    
  return (
    <div className="w-full fixed h-screen flex items-center   justify-center " >
     <div className="w-max flex items-center justify-center group animate-spin-slow hover:pause group-hover:pause relative">
    {
        BtnList.map((btn, index) => {

            const angleRad = (index * Math.PI * angleIncrement) / 180;
            const radius = 'calc(20vw - 100px)';
            const x = `calc(${radius} * ${Math.cos(angleRad)})`;
            const y = `calc(${radius} * ${Math.sin(angleRad)})`;
            return (

                <NavButton key={index} x={x} y={y} label={btn.label} link={btn.link} icon={btn.icon} newTab={btn.newTab} />
               
            );
        })
    }
    </div>
    </div>
  )
}

export default Navigation