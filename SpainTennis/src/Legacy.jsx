import "./legacy.css";
import vid from "./assets/spanishvid.mp4"
import "animate.css"
import { useInView } from 'react-intersection-observer';


const Legacy = ({info, toggle}) => {
    const { ref: animationRef, inView: animationInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });

    return (
        <>
        
        <div className="section1" id="legacy">

            <div ref={animationRef} style={{display:"flex", alignItems:"center", marginTop:"50px"}} className={`animate__animated ${animationInView ? 'animate__backInRight' : 'empty'}`}>
                <h1>{info[1]}</h1>
                <p>{info[9]}</p>
            </div>
            

            <div style={{overflow: "hidden", width: "100%", height: "700px"}}>
                <iframe src={info[43]} width='100%' height='1000' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
            </div>
            

            <div style={{display:"flex", alignItems:"center", marginTop:"20px"}}>
                <div className="infobox" style={{display:"flex", flexDirection:"column", marginRight:"50px"}}>
                    <p className="info" style={{width:"600px"}}>{info[10]}</p>   

                    <p className="info" style={{width:"600px"}}>{info[11]}</p>    
                </div>

                <iframe className="vid" width="670" height="365" src="https://www.youtube.com/embed/V958Hg80rls?si=Aj7DzTpLJmdGK48b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>

        
                 
            
            
            <video src={vid} width="100%" autoPlay loop muted style={{marginTop:"70px"}}></video>

        </div>
        

        
        </>
        

    )
    
    
};

export default Legacy;