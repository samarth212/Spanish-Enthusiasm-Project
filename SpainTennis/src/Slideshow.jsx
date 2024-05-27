import "./slideshow.css"
import { useState, useEffect } from "react";

const SlideShow = ({imageUrls}) => {

    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage(){
        setImageIndex(index => {
            if (index == imageUrls.length - 1) return 0
            return index + 1
        })
        
    }


    function showPrevImage(){
        setImageIndex(index => {
            if (index == 0) return imageUrls.length - 1
            return index -1
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(index => {
                if (index == imageUrls.length - 1) return 0
                return index + 1
            })
        }, 4000);
 
        return () => clearInterval(interval);
    }, []);


    return (

        

        <div style={{width:"1000px", height:"500px", position:"relative"}}>
            <div style={{width:"100%", height:"100%", display:"flex", overflow:"hidden"}}>
                {imageUrls.map(url => (
                    <img key={url} src={url} alt="" className="sliderImg" style={{translate:`${-100*imageIndex}%`}} />
                ))}
            </div>
            <button onClick={showPrevImage} className="sliderBtn1">&#8592;</button>
            <button onClick={showNextImage} className="sliderBtn2">&#8594;</button>
        </div>
    )
};

export default SlideShow;