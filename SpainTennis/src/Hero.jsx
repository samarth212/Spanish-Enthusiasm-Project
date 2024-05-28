import "./hero.css";
import img from "./assets/images/img1.jpeg";
import hero1 from "./assets/images/home2.jpg"

const Hero = () => {


    return (
        <>
        
        <div style={{display:"flex", position:"absolute", top:"20px"}} className="nav">
            <a href="/about" target="_blank">About</a>
            <a href="#legacy">A Legacy of Champions</a>
            <a href="#clay">The Clay Court Advantage</a>
            <a href="#rise">A Sport on the Rise</a>
            <a href="#borders">Beyond Spain's Borders</a>
        </div>

        <img className="bg" src={hero1}/>
        <div className="title-cont">
            <p className="title">Tennis in <span>Spain</span></p>
            <p className="title-desc">Explore this website to learn about how tennis has been influential part of Spanish culture.</p>
            <a href="#legacy"><button className="hero-button">Learn More</button></a>
        </div>

        </>

    )
    
    
};

export default Hero;