import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import hal from './Hal (2).png';
import './photo.css';


export default function Photo() {
    return(
        <div class=' d-flex flex-column align-items-center p-4'>
        <img class=' ' id='hal' alt='hal' src={hal}/>
        <h1 class='text-center mb-3'>Hal Roberts</h1>
        <h5 class='text-center'>Data Science | Machine Learning | Software Engineer</h5>
        </div>
    )
}