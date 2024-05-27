import "./rise.css";
import tennis from "./assets/images/tennis1.jpeg"
import Counter from "./Counter";

const Rise = () => {

    return (
        <>
        
        <div className="section3">
            <div style={{display:"flex", alignItems:"center", marginTop:"50px", marginBottom:"50px"}}>
                    <h1>A Sport on the Rise</h1>
                    <p style={{width: "800px"}}>The rise of young stars like Carlos Alcaraz has ignited a new wave of passion for tennis among Spanish youth. And with Spain already having a large tennis culture, tennis is only growing in popularity within the country.</p>
            </div>

            <div style={{display:"flex", alignItems:"center", marginTop:"50px", marginBottom:"50px"}}>

                <img style={{width: "650px", height:"450px", objectFit:"cover"}} src={tennis} alt="" />

                <div style={{marginLeft:"100px"}}>
                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>Grassroots Programs</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>Many tennis clubs and academies have implemented programs in schools and communities, making tennis more accessible to young people. Some of the biggest programs include the Valencia Tennis Academy and the Rafa Nadal Academy.</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>Junior Tournaments</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>Spain has a well-established junior tennis circuit, providing competitive opportunities for aspiring players. Tournaments such as the Madrid Open U18 provide young talented Spanish players with a way to exhibit their skills.</p>

                    <p style={{fontWeight: "700", marginTop:"0", marginBottom:"0"}}>Growth in Infrastructure</p>
                    <p style={{fontWeight: "300", marginTop:"0", marginBottom:"30px", width:"600px"}}>Investment in public and private tennis facilities has increased the availability of courts throughout the country.</p>
                </div>


            </div>
            <p style={{fontWeight:"700", fontSize:"30px"}}>Quick Stats</p>
            <div className="counter">
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"10px", marginRight:"10px"}}>
                    <Counter start={0} end={90000} duration={2.5} unit="+"/>
                    <p style={{fontWeight:"500", marginTop:"0"}}>People in Spain who play tennis</p>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"10px", marginRight:"10px"}}>
                    <Counter start={0} end={1000} duration={2.5} unit="+"/>
                    <p style={{fontWeight:"500", marginTop:"0"}}>Tennis clubs in Spain</p>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"10px", marginRight:"10px"}}>
                    <Counter start={0} end={6000} duration={2.5} unit="+"/>
                    <p style={{fontWeight:"500", marginTop:"0"}}>Tennis courts in Spain</p>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"10px", marginRight:"10px"}}>
                    <Counter start={0} end={30} duration={2.5} unit="%"/>
                    <p style={{fontWeight:"500", marginTop:"0"}}>of Spain watch tennis</p>
                </div>
                
            </div>


        </div>

        
        

        
        </>
        

    )
    
    
};

export default Rise;