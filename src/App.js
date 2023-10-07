import React, { useEffect } from 'react';
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

//add project to github
// fix the photo responiveness when you shorten the screen vertically
// write out project descriptions
// attach project locations and files
// finish last project
// add nodejs to contact
// prettify the code
// deploy on netlify

function App() {

  useEffect(() => {
    document.title = "Hal Roberts"; 
  }, []);

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

          {/* <div class='col  d-none d-xxl-block' id='second'>

              <div class='d-flex align-items-center justify-content-center  h-100' > <Flipper/></div> 

          </div> */}
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


