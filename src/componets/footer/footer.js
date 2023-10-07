import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import github from './image.jpg'
import linkedin from './linkedin.jpg'


export default function Footer () {
    const GithubLink = () => {
        return (
          <a href="https://github.com/Roberts37" target="_blank" rel="noopener noreferrer">
            <img
              src={github} 
              alt="Description of the image"
              width="100" 
              height="100"
              id='github_icon'
              class='m-2'
            />
          </a>
        );
      };

      const LinkedinLink = () => {
        return (
          <a href="https://www.linkedin.com/in/hal-roberts-455545130/" target="_blank" rel="noopener noreferrer">
            <img
              src={linkedin} 
              alt="Description of the image"
              width="100" 
              height="100"
              id='linkedin_icon'
              class='m-2'
            />
          </a>
        );
      };


      const [footerClass, setFooterClass] = useState('p-3 row');

      useEffect(() => {
        function handleResize() {
          // Check the screen width and update the footer ID accordingly
          if (window.innerWidth < 768) {
            setFooterClass('p-3');
          } else {
            setFooterClass('p-3 row');
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



    return (
        <div class={footerClass} id='full_foot'> 
            <section className=" col" id='section'>
                <h3>About this page</h3>
                <p class='d-flex'>This page was created end to end by Hal Roberts using React, powered by Node.js and hosted on netlify. <br/><br/>© Hal Roberts 2023 All Rights Reserved.</p>
            </section>
            <section class=' col justify-content-center d-flex p-3' id='section2'>
                <GithubLink />
                <LinkedinLink />
            </section>
        </div>
    )
}