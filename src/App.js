import React, { useEffect } from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './componets/projects/projects';
import About from './componets/photo/about';
import Qual from './componets/qualifications/qual';
import Skills from './componets/skills/skills';
import Photo from './componets/photo/photo';
import Navigation from './componets/top_menu/top_menu.js';
import Contact from './componets/contact/contact.js';
import Footer from './componets/footer/footer.js';
import favicon from './ai.png';


// optimize on a mobile device somehow or check if we can view it on mobile
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
      
      {/* First Screen  */}
      <div class='row mb-5 ' id='title'>

        <div class='row  justify-content-center' id='navigation'>
          <div class='col-12 justify-content-center  d-flex'>
            <Navigation />
          </div>
        </div>

        <div class='justify-content-center  d-flex flex-column align-items-center ' >
          <div class='justify-content-center  d-flex align-items-center ' id='first'> 
            <Photo />
          </div>
        </div> 

      </div>

      {/* Everything below the first screen */}
      <div class='row  justify-content-center mb-4' >
        <div class='col-12 ' id="about_main">
          <About/>
        </div>
      </div>

         
      <div class='row  justify-content-center mb-5'>
        <div class='col-12 ' id='skills'> 
          <Skills />
        </div>
      </div>

      <div class='row  justify-content-center mb-5'>
        <div class='col-12' id='qualifications'> 
          <Qual />
        </div> 
      </div>

      <div class='row  justify-content-center mb-5'>
        <div class='col-12' id='project'>
          <Project/>
        </div>
      </div>

      <div class='row  justify-content-center mb-5'>
        <div class='col-12 ' id='contact_me'> 
          <Contact />
        </div> 
      </div>
 
      <div class='row  justify-content-center'>
        <div class='col-12' id='footer'> 
          <Footer />
        </div> 
      </div>


    </div>

  
  );
}

export default App;


