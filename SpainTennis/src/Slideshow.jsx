import "./slideshow.css"
import { useState } from "react";

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


    return (
        <div style={{width:"1000px", height:"500px", position:"relative"}}>
            <img src={imageUrls[imageIndex]} alt="" className="sliderImg" />
            <button onClick={showPrevImage} className="sliderBtn1">&#8592;</button>
            <button onClick={showNextImage} className="sliderBtn2">&#8594;</button>
        </div>
    )
};

export default SlideShow;