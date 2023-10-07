import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import python from './icons/python.png'
import react from './icons/reacty.png'
import tensorflow from './icons/tensorflow.png'
import pandas from './icons/pandas.png'
import numpy from './icons/numpy.png'
import sci from './icons/scikitlearn.png'
import git from './icons/github.png'
import django from './icons/django.png'
import flask from './icons/flask.png'
import sql from './icons/sql.png'
import r from './icons/r.png'
import tidy from './icons/tidyverse.png'
import html from './icons/html.png'
import css from './icons/css.png'
import bootstrap from './icons/bootstrap.png'
import php from './icons/php.png'
import java from './icons/java.png'
import jupyter from './icons/jupyter.png'
import aws from './icons/aws.png'
import sage from './icons/sage.png'
import tableau from './icons/tableau.png'
import bi from './icons/bi.png'
import soup from './icons/soup.png'
import node from './icons/node.png'
import adobe from './icons/adobe.png'
import mongo from './icons/mongo.png'
import './skills.css'

export default function Skills() {


    return (
        <div id='b' class='rounded'>
            <h3 class='text-center p-2'>Skills</h3>
            <div class='pb-3 d-flex flex-wrap flex-row justify-content-center'>
            <Icon name={python} desc='Python'/>
            <Icon name={tensorflow} desc='Tensorflow'/>
            <Icon name={sql} desc='SQL' /> 
            <Icon name={mongo} desc='MongoDB'/>
            <Icon name={pandas} desc='Pandas'/>
            <Icon name={numpy} desc='Numpy'/>
            <Icon name={sci} desc='Sci-Kit Learn'/>
            <Icon name={django} desc='Django'/>
            <Icon name={flask} desc='Flask'/>
            <Icon name={soup} desc='Beautiful Soup'/>
            <Icon name={git} desc='Git Hub'/>
            <Icon name ={jupyter} desc='Jupyterlab'/>
            <Icon name={tableau} desc='Tableau'/>
            <Icon name={bi} desc='Power BI'/>
            <Icon name={adobe} desc='Adobe Cloud'/>
            <Icon name={php} desc='PHP'/>
            <Icon name={r} desc='R'/>
            <Icon name={tidy} desc='Tidyverse'/>
            <Icon name={aws} desc='AWS'/>
            <Icon name={sage} desc='SageMaker'/>
            <Icon name={html} desc='HTML'/>
            <Icon name={css} desc='CSS'/>
            <Icon name={bootstrap} desc='Bootstrap'/>
            <Icon name={java} desc='Javascript'/>
            <Icon name={react} desc='React'/>
            <Icon name={node} desc='Node.js'/>
            </div>


        </div>
    )
}

function Icon ({name, desc}) {
    return (
        <div class='p-2 justify-content-center'>
            <img class =' p-1 justify-content-center' id='image-icon' src={name}/>
            <p class='text-center'>{desc}</p>
        </div>
    )   
}