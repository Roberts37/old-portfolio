import React, { useEffect, useState } from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './componets/projects/projects';
import About from './componets/photo/about';
import Qual from './componets/topRight/qual';
import Skills from './componets/skills/skills';
import Flipper from './componets/topRight/rotating';
import Photo from './componets/photo/photo';
import Navigation from './componets/top_menu/top_menu.js';
import Contact from './componets/contact/contact.js';
import Footer from './componets/footer/footer.js';
import favicon from './ai.png';


// format the node js message
// make the react app send an alert when you submit
// prettify the code
// finish projects
// deploy on netlify

function App() {

  useEffect(() => {
    document.title = "Hal Roberts"; 
  }, []);

  useEffect(() => {
    // Create a new link element for the favicon
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = favicon;

    // Update the favicon in the document's head
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [favicon]);




  return (
    
    <div className='main'>
      
      <div class='row mb-5 ' id='title'>

        <div class='row  justify-content-center' id='navigation'>
          <div class='col-12 justify-content-center  d-flex'>
            <Navigation />
          </div>

        </div>


 
      <div class='justify-content-center  d-flex flex-column align-items-center ' >
        <div class='justify-content-center  d-flex align-items-center ' id='first'> <Photo /></div>
        </div> 


      </div>

      <div class='row  justify-content-center mb-4' >
        <div class='col-12 ' id="pic"><About/></div>
      </div>

         
      <div class='row  justify-content-center mb-5'>
        <div class='col-12 ' id='third'> <Skills /></div>


      </div>


      <div class='row  justify-content-center mb-5'>
      <div class='col-12' id='fourth'> <Qual /></div> 
      </div>


      

      <div class='row  justify-content-center mb-5'>
        <div class='col-12' id='fifth'><Project/></div>
      </div>



      <div class='row  justify-content-center mb-5'>
      <div class='col-12 ' id='sixth'> <Contact /></div> 
      </div>



      
      <div class='row  justify-content-center'>
      <div class='col-12' id='footer'> <Footer /></div> 
      </div>


    </div>

    

  );
}

export default App;


