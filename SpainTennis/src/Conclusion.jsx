import "./conclusion.css";
import court from "./assets/images/court.webp"
import clay24 from "./assets/images/clay24.jpeg"


const Conclusion = () => {

    return (
        <div className="section5">
            <img src={court} alt="" style={{width:"100%", height:"800px", objectFit:"cover", position:"fixed", bottom:"0", zIndex:"-10"}}/>

            <p style={{fontWeight:"500", textAlign:"center"}}>From its cultural significance to its ever-growing popularity, tennis is an essential part of the Spanish identity.</p>
            <p style={{textAlign:"center"}}>And you can become part of this tennis culture as well. Explore the world of Spanish tennis! Visit Spain to experience the passion, or find a local court and embrace the clay court challenge!</p>

            <div style={{display:"flex", marginTop:"100px"}}>

                <div style={{marginRight:"50px"}}>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>Embrace the Passion</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>Immerse yourself in the electrifying atmosphere of a Spanish tournament, witness the dedication on the clay courts, and feel the contagious passion that the country has for the sport.</p>
                </div>

                <div style={{marginLeft:"50px"}}>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>Join the Community</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>The world of Spanish tennis is a vibrant community. Follow your favorite players online, cheer them on at tournaments, or connect with local enthusiasts.</p>
                </div>
                
                

                
            </div>
            <p style={{marginBottom:"100px"}}>This website is your gateway to the captivating world of Spanish tennis. I invite you to explore further, engage with the community, and allow yourself to be inspired by the passion and dedicaton that defines Spanish tennis.</p>

            <div className="nav2" style={{width:"100%", height:"200px", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <a href="/about" target="_blank">About</a>
                <a href="#legacy">A Legacy of Champions</a>
                <a href="#clay">The Clay Court Advantage</a>
                <a href="#rise">A Sport on the Rise</a>
                <a href="#borders">Beyond Spain's Borders</a>
            </div>
    

        </div>

    )
    
    
};

export default Conclusion;