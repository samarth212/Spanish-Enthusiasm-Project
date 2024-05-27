import "./legacy.css";
import Slideshow from "./Slideshow";
import clay1 from "./assets/images/clay1.jpeg"
import clay2 from "./assets/images/clay2.jpeg"
import clay3 from "./assets/images/clay3.webp"
import clay4 from "./assets/images/clay4.jpeg"
import clay5 from "./assets/images/clay5.webp"

const images = [clay1, clay2, clay3, clay4, clay5]

const Legacy = () => {

    return (
        <div className="section1">
            <h1>A Legacy of Champions</h1>
            <p>Spain's tennis pedigree is undeniable. From legends like Rafael Nadal and David Ferrer to the current world #1 Carlos Alcaraz Spanish players have dominated the sport for decades. Explore the timeline below to see how Spanish players have evolved over the years.</p>

            <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1fRJVgrlNqakmNcwaHR441tk8GzqgZK0KfsedhJyd9uk&font=Default&lang=en&initial_zoom=2&height=1000' width='100%' height='1000' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>

            <p>This success is fueled by a competitive spirit and a dedication to hard work, ingrained within the Spanish tennis community. Aspiring Spanish players train hard every day with hopes of one day becoming the next Spanish tennis prodigy. </p>           
            
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/V958Hg80rls?si=Aj7DzTpLJmdGK48b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <Slideshow imageUrls = {images}></Slideshow>
        </div>

    )
    
    
};

export default Legacy;