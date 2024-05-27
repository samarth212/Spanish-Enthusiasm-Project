import "./legacy.css";
import vid from "./assets/spanishvid.mp4"


const Legacy = () => {

    return (
        <>
        
        <div className="section1">

            <div style={{display:"flex", alignItems:"center", marginTop:"50px"}}>
                <h1>A Legacy of Champions</h1>
                <p>Spain's tennis pedigree is undeniable. From legends like Rafael Nadal and David Ferrer to the current world #1 Carlos Alcaraz Spanish players have dominated the sport for decades. Explore the timeline below to see how Spanish players have evolved over the years.</p>
            </div>
            

            <div style={{overflow: "hidden", width: "100%", height: "700px"}}>
                <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1fRJVgrlNqakmNcwaHR441tk8GzqgZK0KfsedhJyd9uk&font=Default&lang=en&initial_zoom=2&height=1000' width='100%' height='1000' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
            </div>
            

            <div style={{display:"flex", alignItems:"center", marginTop:"20px"}}>
                <div style={{display:"flex", flexDirection:"column", marginRight:"50px"}}>
                    <p style={{width:"600px"}}>This success is fueled by a competitive spirit and a dedication to hard work, ingrained within the Spanish tennis community. Aspiring Spanish players train hard every day with hopes of one day becoming the next Spanish tennis prodigy. </p>   

                    <p style={{width:"600px"}}>Camps hosted by famous Spanish players such as the Rafa Nadal Academy help to inspire young children to develop the drive to be successful.</p>    
                </div>

                <iframe width="670" height="365" src="https://www.youtube.com/embed/V958Hg80rls?si=Aj7DzTpLJmdGK48b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>

        
                 
            
            
            
        </div>
        
        <video src={vid} width="100%" autoPlay loop muted style={{marginTop:"70px"}}></video>

        
        </>
        

    )
    
    
};

export default Legacy;