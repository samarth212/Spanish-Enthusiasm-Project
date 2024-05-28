import "./borders.css";
import inter1 from "./assets/images/inter1.jpeg"
import inter2 from "./assets/images/inter2.avif"
import "animate.css"
import { useInView } from 'react-intersection-observer';


const Borders = () => {

    const { ref: animationRef, inView: animationInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });

    return (
        <div className="section4" id="borders">

            <div ref={animationRef} style={{display:"flex", alignItems:"center", marginTop:"50px", marginBottom:"50px"}} className={`animate__animated ${animationInView ? 'animate__backInRight' : 'empty'}`}>
                <h1>Beyond Spain's Borders</h1>
                <p style={{width: "800px"}}>Tennis serves as a powerful tool for growth and opportunity across Spanish-speaking countries, not only in Spain but throughout Latinamerica as well.</p>
            </div>

            <div style={{display:"flex", marginTop:"40px", alignItems:"center", marginBottom:"50px"}}>
                <div>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>South American Programs</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>Countries like Argentina and Colombia have adopted development programs modeled after the Spanish system, such as Asociación Argentina de Tenis and Bogota Club. These programs identify young talent, provide training opportunities, and aim to replicate Spain's success on the international stage. In fact, with the help of other big tennis associations such as USTA, participation in the sport among Latino players has grown by 90% over the past three years.</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>International Tournaments</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>Hosting and participating in international tournaments like the Davis Cup and Fed Cup provides valuable experience for players from Spanish-speaking countries. It allows these Latinamerican players to compete against top competition and gain visibility on the world stage. Leading in this stage is Argentina, with a Davis Cup win in 2016 and an international ranking of 15.</p>
                </div>

                <div style={{display:"flex", flexDirection:"column", marginLeft:"100px"}}>
                    <img style={{width: "420px", height:"200px", objectFit:"cover", marginBottom:"50px", objectPosition:"bottom center"}} src={inter1} alt="" />
                    <img style={{width: "420px", height:"200px", objectFit:"cover"}} src={inter2} alt="" />
                </div>

                
            </div>
            

        </div>

    )
    
    
};

export default Borders;