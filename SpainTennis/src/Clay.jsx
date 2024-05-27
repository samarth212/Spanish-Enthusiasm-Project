import "./clay.css";
import Slideshow from "./Slideshow";
import clay1 from "./assets/images/clay1.jpeg"
import clay2 from "./assets/images/clay2.jpeg"
import clay3 from "./assets/images/clay3.webp"
import clay4 from "./assets/images/clay4.jpeg"
import clay5 from "./assets/images/clay5.webp"
import clay21 from "./assets/images/clay21.jpeg"
import clay22 from "./assets/images/clay22.jpeg"
import clay24 from "./assets/images/clay24.jpeg"



const images = [clay1, clay2, clay3, clay4, clay5]
/*<Slideshow imageUrls = {images}></Slideshow>*/



const Clay = () => {

    return (
        <div className="section2">

            <div style={{display:"flex", alignItems:"center", marginTop:"50px", marginBottom:"50px"}}>
                <h1>The Clay Court Advantage</h1>
                <p style={{width: "800px"}}>Spain boasts some of the world's best clay courts. Made from crushed brick, shale, or limestone, these courts create a grippy surface that slows down the ball, encouraging strategic rallies and demanding endurance from players. This characteristic makes them perfect for the grueling, baseline-oriented style of play that Spanish tennis is known for.</p>
            </div>

            <Slideshow imageUrls = {images}></Slideshow>

            <div style={{display:"flex", marginTop:"100px", alignItems:"center", marginBottom:"50px"}}>
                <div>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>Play Style</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>Spanish players traditionally excel at baseline rallies using powerful ground-strokes and topspin. The slower clay court allows them to control the point and wear down their opponents.</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>Footwork</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>Spanish training emphasizes footwork drills to master the sliding technique required on clay. This agility gives them an edge in retrieving shots and chasing down drop shots.</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>Mental Toughness</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>Clay court matches are known for their physically demanding nature. Spanish players are known for their mental fortitude and ability to stay focused during long rallies.</p>
                </div>

                <div style={{display:"flex", flexDirection:"column", marginLeft:"100px"}}>
                    <img style={{width: "420px", height:"200px", objectFit:"cover", marginBottom:"50px", objectPosition:"bottom center"}} src={clay21} alt="" />
                    <img style={{width: "420px", height:"200px", objectFit:"cover"}} src={clay22} alt="" />
                </div>
            </div>
            
            <img style={{width:"100%", height:"300px", objectFit:"cover", marginTop:"100px"}} src={clay24} alt="" />

        </div>

    )
    
    
};

export default Clay;