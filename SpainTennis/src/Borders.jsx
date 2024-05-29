import "./borders.css";
import inter1 from "./assets/images/inter1.jpeg"
import inter2 from "./assets/images/inter2.avif"
import "animate.css"
import { useInView } from 'react-intersection-observer';


const Borders = ({info, toggle}) => {

    const { ref: animationRef, inView: animationInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });

    return (
        <div className="section4" id="borders">

            <div ref={animationRef} style={{display:"flex", alignItems:"center", marginTop:"50px", marginBottom:"50px"}} className={`animate__animated ${animationInView ? 'animate__backInRight' : 'empty'}`}>
                <h1>{info[3]}</h1>
                <p style={{width: "800px"}}>{info[31]}</p>
            </div>

            <div style={{display:"flex", marginTop:"40px", alignItems:"center", marginBottom:"50px"}}>
                <div>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>{info[32]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>{info[33]}</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>{info[34]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>{info[35]}</p>
                </div>

                <div className="img" style={{display:"flex", flexDirection:"column", marginLeft:"100px"}}>
                    <img style={{width: "420px", height:"200px", objectFit:"cover", marginBottom:"50px", objectPosition:"bottom center"}} src={inter1} alt="" />
                    <img style={{width: "420px", height:"200px", objectFit:"cover"}} src={inter2} alt="" />
                </div>

                
            </div>
            

        </div>

    )
    
    
};

export default Borders;