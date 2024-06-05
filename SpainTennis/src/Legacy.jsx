import "./legacy.css";
import vid from "./assets/spanishvid.mp4"
import thumbnail from "./assets/images/thumbnail.png"
import "animate.css"
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

const Legacy = ({info, toggle}) => {
    const { ref: animationRef, inView: animationInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });

    const { ref: animationRef2, inView: animationInView2 } = useInView({
        triggerOnce: true,
        threshold: 0.3, 
    });

    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [iframeLoadFailed, setIframeLoadFailed] = useState(false);

    useEffect(() => {
        const iframe = document.getElementById('youtube-iframe');

        const handleLoad = () => {
            setIframeLoaded(true);
        };

        const handleError = () => {
            setIframeLoadFailed(true);
        };

        if (iframe) {
            iframe.addEventListener('load', handleLoad);
            iframe.addEventListener('error', handleError);

            const timeout = setTimeout(() => {
                if (!iframeLoaded) {
                    setIframeLoadFailed(true);
                }
            }, 2000);

            return () => {
                clearTimeout(timeout);
                iframe.removeEventListener('load', handleLoad);
                iframe.removeEventListener('error', handleError);
            };
        }
    }, [iframeLoaded]);

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
                    <p ref={animationRef2} style={{width:"600px"}} className={`animate__animated ${animationInView2 ? 'animate__backInRight' : 'empty info'}`}>{info[10]} </p>   

                    <p ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInLeft' : 'empty info'}`} style={{width:"600px"}} >{info[11]}</p>    
                </div>

                {iframeLoadFailed ? (
                    <a href="https://www.youtube.com/embed/V958Hg80rls?si=Aj7DzTpLJmdGK48b" target="_blank"><img src={thumbnail} ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInUp' : 'empty vid'}`} style={{width:"670px", height:"365px"}}/></a>
                ) : (
                    <iframe id="youtube-iframe" ref={animationRef2} className={`animate__animated ${animationInView2 ? 'animate__backInUp' : 'empty vid'}`} width="670" height="365" src="https://www.youtube.com/embed/V958Hg80rls?si=Aj7DzTpLJmdGK48b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                )}

                

            </div>

        
                 
            
            
            <video src={vid} width="100%" autoPlay loop muted style={{marginTop:"70px"}}></video>

        </div>
        

        
        </>
        

    )
    
    
};

export default Legacy;