import "./conclusion.css";
import court from "./assets/images/court.webp"
import clay24 from "./assets/images/clay24.jpeg"
import { useInView } from "react-intersection-observer";

const Conclusion = ({info, toggle}) => {

    const { ref: animationRef, inView: animationInView } = useInView({
        triggerOnce: true,
        threshold: 0.5, 
    });

    const { ref: animationRef2, inView: animationInView2 } = useInView({
        triggerOnce: true,
        threshold: 0.5, 
    });

    return (
        <div className="section5">
            <img className="bgimg" src={court} alt="" style={{width:"100%", height:"800px", objectFit:"cover", position:"fixed", bottom:"0", zIndex:"-10"}}/>

            <p style={{fontWeight:"500", textAlign:"center"}} ref={animationRef} className={`animate__animated ${animationInView ? 'animate__backInDown' : 'empty'}`}>{info[36]}</p>
            <p style={{textAlign:"center"}}ref={animationRef} className={`animate__animated ${animationInView ? 'animate__backInDown' : 'empty'}`}>{info[37]}</p>

            <div style={{display:"flex", marginTop:"100px"}}>

                <div style={{marginRight:"50px"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInLeft' : 'empty'}`}>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>{info[38]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>{info[39]}</p>
                </div>

                <div style={{marginLeft:"50px"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInRight' : 'empty'}`}>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>{info[40]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>{info[41]}</p>
                </div>
                
                

                
            </div>
            <p style={{marginBottom:"100px"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInUp' : 'empty'}`}>{info[42]}</p>

            <div className="nav2" style={{width:"100%", height:"200px", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <a href="/about" target="_blank">{info[0]}</a>
                <a href="#legacy">{info[1]}</a>
                <a href="#clay">{info[2]}</a>
                <a href="#rise">{info[3]}</a>
                <a href="#borders">{info[4]}</a>
            </div>
    

        </div>

    )
    
    
};

export default Conclusion;