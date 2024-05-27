import "./clay.css";
import Slideshow from "./Slideshow";
import clay1 from "./assets/images/clay1.jpeg"
import clay2 from "./assets/images/clay2.jpeg"
import clay3 from "./assets/images/clay3.webp"
import clay4 from "./assets/images/clay4.jpeg"
import clay5 from "./assets/images/clay5.webp"

const images = [clay1, clay2, clay3, clay4, clay5]
/*<Slideshow imageUrls = {images}></Slideshow>*/



const Clay = () => {

    return (
        <div className="section2">
            <h1>The Clay Court Advantage</h1>
            <div className="img-text">
                <Slideshow imageUrls = {images}></Slideshow>
                <p style={{marginLeft:"60px", lineHeight:"40px"}}>Spain boasts some of the world's best clay courts. Made from crushed brick, shale, or limestone, these courts create a grippy surface that slows down the ball, encouraging strategic rallies and demanding endurance from players. This characteristic makes them perfect for the grueling, baseline-oriented style of play that Spanish tennis is known for.</p>
            </div>
        </div>

    )
    
    
};

export default Clay;