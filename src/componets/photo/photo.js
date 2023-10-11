import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import hal from './Hal (2).png';
import './photo.css';


export default function Photo() {


    const [photoClass, setPhotoClass] = useState('p-3 row');
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      // Check the screen width and update the footer ID accordingly
      setScreenHeight(window.innerHeight);

      if (window.innerHeight > 768) {
        setPhotoClass('d-flex flex-column align-items-center  p-4');
      } else {
        setPhotoClass('d-flex align-items-center p-4 justify-content-center ');
      }
    }


        // Add a listener for window resize events
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially to set the initial ID
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
    window.removeEventListener('resize', handleResize);
    };
    }, []);


    
    return(
        <div class={photoClass}>
          {screenHeight >= 430 ? (
        <img class=' ' id='hal' alt='hal' src={hal}/>
        ) : null}
        <div class='p-3'>
        <h1 class='text-center mb-3'>Hal Roberts</h1>
        <h5 class='text-center'>Data Science | Machine Learning | Software Engineer</h5>
        </div>
        </div>
    )
}