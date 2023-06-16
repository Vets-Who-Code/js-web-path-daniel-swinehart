import { useState } from 'react';

export default function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    
    //slideshow images
    const slideImages = [
        "/slideshow/imgOne.jpg",
        "/slideshow/imgTwo.jpg",
        "/slideshow/imgThree.jpg",
        "/slideshow/imgFour.jpg",
        "/slideshow/imgFive.jpg",
        "/slideshow/imgSix.jpeg",
    ];

    setTimeout(changeSlides, 4000);
    
    function changeSlides() {
        if (currentIndex === (slideImages.length - 1)) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
  
    return (
        <div className="slideshow-container">
            <img className="slide-img" src={slideImages[currentIndex]} alt="Slide Image" />
        </div>
    );
  };