import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './qual.css';

export default function Qual() {

    

    return (
        <div id='qual' class='rounded'>


                <div class=' rounded '>
                    <p class='text-center pt-2'><h3>Qualifications</h3></p>
                </div>

            <div id='large' class=' d-flex flex-column justify-content-center'>

            <div class='row  justify-content-center' id='divider'>
                
                <div class='  col-5 mr-2' id='data'>
                    <h4 class='m-auto text-center border-bottom p-2 pb-3'>Data</h4>
                    <div class='m-2'>
                        <ul>
                        
                            <li>Briderland Technical College</li>
                            <ul>
                                <li>Data Analytics</li>
                            </ul>
                            <li><a href='https://www.coursera.org/account/accomplishments/specialization/certificate/NMSTCHEVD8FJ' target="_blank" rel="noopener noreferrer">Data Scientist</a></li>
                            <li>Data Engineering</li>
                        
                        </ul>
                    </div>
                </div>

                <div class=' col-5  '>
                    <h4 class='m-auto text-center border-bottom p-2 pb-3'>Machine Learning</h4>

                         <div class='m-2'> 
                            <ul>
                                <li><a href='https://coursera.org/share/73b1e55ffaa43a0c2a31ccffb016201a' target="_blank" rel="noopener noreferrer">Certified Tensorflow Developer</a></li>
                                <li><a href='https://coursera.org/share/cd2024a76237023bbb8ba0ded494537c' target="_blank" rel="noopener noreferrer">Machine Learning</a></li>
                                <li>Natural Language Processing</li>
                                <li>Machine Learning Engineering for Production</li>
                                <li>Tensorflow Data and Deployment</li>
                            </ul>

                        </div>
                </div>
                </div>
                
                <div class='row  justify-content-center' id='divider'>
                
                <div class='  col-5 mr-2' id='data'>
                    <h4 class='m-auto text-center border-bottom p-2 pb-3'>Development</h4>
                    <div class='m-2'>
                        <ul>

                            <li>Front End Development</li>
                            <li><a href='https://www.coursera.org/account/accomplishments/specialization/certificate/FK6K3NK9QPKM' target="_blank" rel="noopener noreferrer">Back End Development</a></li>
                        
                        </ul>
                    </div>
                </div>

                <div class=' col-5 mb-3 '>
                    <h4 class='m-auto text-center border-bottom p-2 pb-3'>Experience</h4>

                         <div class='m-2'> 
                            <ul>
                                <li>America First Credit Union</li>
                                <ul>
                                    <li>Data Analyst </li>
                                </ul>
                                <li>Self Employment</li>
                                <ul>
                                    <li>Freelance Data Analyst</li>
                                </ul>
                                <li>FortuneFavorites</li>
                                <ul>
                                    <li>Data Analyst/Business Owner</li>
                                </ul>

                            </ul>

                        </div>
                </div>
                </div>


            </div>
        </div>
    );
}