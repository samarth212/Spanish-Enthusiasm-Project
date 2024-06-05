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
import "animate.css"
import { useInView } from 'react-intersection-observer';



const images = [clay1, clay2, clay3, clay4, clay5]
/*<Slideshow imageUrls = {images}></Slideshow>*/



const Clay = ({info, toggle}) => {
    const { ref: animationRef, inView: animationInView } = useInView({
        triggerOnce: true,
        threshold: 0.5, 
    });

    const { ref: animationRef2, inView: animationInView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });

    return (
        <div className="section2" id="clay">

            <div ref={animationRef} style={{display:"flex", alignItems:"center", marginTop:"50px", marginBottom:"50px"}} className={`animate__animated ${animationInView ? 'animate__backInRight' : 'empty'}`}>
                <h1>{info[2]}</h1>
                <p style={{width: "800px"}}>{info[12]}</p>
            </div>

            <Slideshow imageUrls = {images}></Slideshow>

            <div style={{display:"flex", marginTop:"100px", alignItems:"center", marginBottom:"50px"}}>
                <div>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInDown' : 'empty'}`}>{info[13]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInDown' : 'empty'}`}>{info[14]}</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInLeft' : 'empty'}`}>{info[15]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInLeft' : 'empty'}`}>{info[16]}</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInUp' : 'empty'}`}>{info[17]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInUp' : 'empty'}`}>{info[18]}</p>
                </div>

                <div style={{display:"flex", flexDirection:"column", marginLeft:"100px"}} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInRight' : 'empty imgcont'}`}>
                    <img style={{width: "420px", height:"200px", objectFit:"cover", marginBottom:"50px", objectPosition:"bottom center"}} src={clay21} alt="" />
                    <img style={{width: "420px", height:"200px", objectFit:"cover"}} src={clay22} alt="" />
                </div>
            </div>
            
            <img style={{width:"100%", height:"300px", objectFit:"cover", marginTop:"100px"}} src={clay24} alt="" />

        </div>

    )
    
    
};

export default Clay;