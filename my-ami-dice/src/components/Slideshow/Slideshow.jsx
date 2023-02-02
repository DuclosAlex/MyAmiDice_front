import React from "react";
import { Slide } from "react-slideshow-image";
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import 'react-slideshow-image/dist/styles.css'
import './style.scss'

const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicator: true,
    arrow: true
}

const slideImages = [
    {
        name: img1,
        description: 'image1'
    },
    {
        name: img2,
        description: 'image2'
    }
]

function Slideshow() {
    return(
        <div className="containerSlide">
            <Slide {... properties}>
                {slideImages.map((picture, index) =>(
                    <div className="each-slide" key= {index}>
                        <div>
                            <img src={picture.name} alt={picture.description} />
                        </div>
                </div>
                ))}               
            </Slide>
        </div>       
    )
}

export default Slideshow;