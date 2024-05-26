import "./hero.css";
import img from "./assets/images/img1.jpeg";

const Hero = () => {


    return (
        <>

        <img className="bg" src={img} alt=""/>
        <div className="title-cont">
            <p className="title">Tennis in <span>Spain</span></p>
            <p className="title-desc">Explore this website to learn about how tennis has been influential part of Spanish culture.</p>
            <button className="hero-button">Learn More</button>
        </div>

        </>

    )
    
    
};

export default Hero;