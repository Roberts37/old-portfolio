import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import python from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/python.png';
import react from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/reacty.png';
import tensorflow from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/tensorflow.png';
import pandas from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/pandas.png';
import numpy from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/numpy.png';
import sql from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/sql.png';
import bootstrap from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/bootstrap.png';
import aws from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/aws.png';
import sage from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/sage.png';
import tableau from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/tableau.png';
import soup from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/soup.png';
import java from 'C:/Users/halro/Documents/DesktopTransfer/Documents/Portfolio/portfolio/src/componets/skills/icons/java.png';
import './rotating.css'




export default function Flipper() {
    const rotatingImageRef = useRef(null);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [python, tensorflow, sql, tableau, numpy, soup, aws, sage, java, react, bootstrap, pandas]; // Add more image URLs if needed
    const imageCount = images.length;
    const textDescriptions = ['Python', 'Tensorflow', 'Sql','Tableau','Numpy','Beautiful Soup','AWS','Sage Maker','Javascript','React','Bootstrap','Pandas'];

  
    let rotation = 180;
    let initialSpeed = 1;
    let maxSpeed = 1;
    let acceleration = 1;
    let deceleration = 1;
    let rotationSpeed = initialSpeed;
  
    const rotateImage = () => {
      rotation += rotationSpeed;
      rotatingImageRef.current.style.transform = `rotateY(${rotation}deg)`;

        // Calculate opacity based on rotation angle
    const opacity = rotation <= 180 ? rotation / 180+180 : (360+180 - rotation) / 180;
    rotatingImageRef.current.style.opacity = opacity;
    
      // Adjust rotation speed using easing functions
      if (rotationSpeed < maxSpeed) {
        rotationSpeed += acceleration;
      } else if (rotation > 180+180 && rotationSpeed > initialSpeed) {
        rotationSpeed -= deceleration;
      }
  
      // Check for image change at 180 degrees and switch image
      if (rotation > 360+180) {
        if (currentImageIndex >= imageCount -1) {
        setCurrentImageIndex(0)}
        else setCurrentImageIndex(currentImageIndex + 1); // Change to the next image
      }
  
      // Continue rotation animation
      requestAnimationFrame(rotateImage);
    };
  
    useEffect(() => {
      rotateImage();
    }, [currentImageIndex])


    return (


    <div className='image-container d-flex flex-column align-items-center p-4 '>
    <div className='rotating-image  '>
        <img
        class=''
        src={images[currentImageIndex]}
        id='hi'
        ref={rotatingImageRef}
        alt='Rotating Icon'
        />
    </div>
    <h3 className='text-center p-2 pt-5 '>{textDescriptions[currentImageIndex]}</h3>
    </div>

)


}