import "./hero.css";
import img from "./assets/images/img1.jpeg";
import hero1 from "./assets/images/home2.jpg"
import { useState } from "react";

const Hero = ({info, func, toggle}) => {


    return (
        <>
        
        <div style={{display:"flex", position:"absolute", top:"20px"}} className="nav">
            <a href="/about" target="_blank">{info[0]}</a>
            <a href="#legacy">{info[1]}</a>
            <a href="#clay">{info[2]}</a>
            <a href="#rise">{info[3]}</a>
            <a href="#borders">{info[4]}</a>
            <button style={{paddingTop:"5px", paddingBottom:"5px", paddingRight:"17px", paddingLeft:"17px", backgroundColor:"orange", border:"none", borderRadius:"10px", color: "black", fontSize:"15px", fontWeight:"700", cursor:"pointer"}} onClick={func}>{toggle ? 'Español' : 'English'}</button>
        </div>

        <img className="bg" src={hero1}/>
        <div className="title-cont">
            <p className="title">{info[5]} <span>{info[6]}</span></p>
            <div className="warn">This site is not optimized for mobile. It is recommended to view on a desktop or a PC.</div>
            <p className="title-desc">{info[7]}</p>
            <a href="#legacy"><button style={{cursor:"pointer"}} className="hero-button">{info[8]}</button></a>
        </div>

        </>

    )
    
    
};

export default Hero;