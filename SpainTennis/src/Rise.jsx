import "./rise.css";
import tennis from "./assets/images/tennis1.jpeg"
import Counter from "./Counter";
import "animate.css"
import { useInView } from 'react-intersection-observer';

const Rise = ({info, toggle}) => {

    const { ref: animationRef, inView: animationInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });

    return (
        <>
        
        <div className="section3" id="rise">
            <div ref={animationRef} style={{display:"flex", alignItems:"center", marginTop:"50px", marginBottom:"50px"}} className={`animate__animated ${animationInView ? 'animate__backInRight' : 'empty'}`}>
                    <h1>{info[3]}</h1>
                    <p style={{width: "800px"}}>{info[19]}</p>
            </div>

            <div style={{display:"flex", alignItems:"center", marginTop:"50px", marginBottom:"50px"}}>

                <img className="img" style={{width: "650px", height:"450px", objectFit:"cover"}} src={tennis} alt="" />

                <div style={{marginLeft:"100px"}}>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>{info[20]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>{info[21]}</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>J{info[22]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>{info[23]}</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>{info[24]}</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>{info[25]}</p>
                </div>


            </div>
            <p style={{fontWeight:"700", fontSize:"30px"}}>{info[26]}</p>
            <div className="counter">
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"10px", marginRight:"10px"}}>
                    <Counter start={0} end={90000} duration={2.5} unit="+"/>
                    <p style={{fontWeight:"500", marginTop:"0"}}>{info[27]}</p>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"10px", marginRight:"10px"}}>
                    <Counter start={0} end={1000} duration={2.5} unit="+"/>
                    <p style={{fontWeight:"500", marginTop:"0"}}>{info[28]}</p>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"10px", marginRight:"10px"}}>
                    <Counter start={0} end={6000} duration={2.5} unit="+"/>
                    <p style={{fontWeight:"500", marginTop:"0"}}>{info[29]}</p>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"10px", marginRight:"10px"}}>
                    <Counter start={0} end={30} duration={2.5} unit="%"/>
                    <p style={{fontWeight:"500", marginTop:"0"}}>{info[30]}</p>
                </div>
                
            </div>


        </div>

        
        

        
        </>
        

    )
    
    
};

export default Rise;