import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pythonIcon from './icons/python.png';
import reactIcon from './icons/reacty.png';
import tensorflowIcon from './icons/tensorflow.png';
import pandasIcon from './icons/pandas.png';
import numpyIcon from './icons/numpy.png';
import sciIcon from './icons/scikitlearn.png';
import gitIcon from './icons/github.png';
import djangoIcon from './icons/django.png';
import flaskIcon from './icons/flask.png';
import sqlIcon from './icons/sql.png';
import kafka from './icons/kafka.png';
import spark from './icons/spark.png';
import htmlIcon from './icons/html.png';
import cssIcon from './icons/css.png';
import bootstrapIcon from './icons/bootstrap.png';
import hadoop from './icons/hadoop.png';
import javaIcon from './icons/java.png';
import jupyterIcon from './icons/jupyter.png';
import awsIcon from './icons/aws.png';
import sageIcon from './icons/sage.png';
import tableauIcon from './icons/tableau.png';
import biIcon from './icons/bi.png';
import soupIcon from './icons/soup.png';
import nodeIcon from './icons/node.png';
import adobeIcon from './icons/adobe.png';
import mongoIcon from './icons/mongo.png';
import airflow from './icons/airflow.png';

import './skills.css';

export default function Skills() {
    return (
        <div id='b' className='rounded'>
            <h3 className='text-center p-2'>Skills</h3>
            <div className='pb-3 d-flex flex-wrap flex-row justify-content-center'>
                <Icon name={pythonIcon} desc='Python' />
                <Icon name={tensorflowIcon} desc='Tensorflow' />
                <Icon name={sqlIcon} desc='SQL' />
                <Icon name={mongoIcon} desc='MongoDB' />
                <Icon name={pandasIcon} desc='Pandas' />
                <Icon name={numpyIcon} desc='Numpy' />
                <Icon name={sciIcon} desc='Sci-Kit Learn' />
                <Icon name={djangoIcon} desc='Django' />
                <Icon name={flaskIcon} desc='Flask' />
                <Icon name={soupIcon} desc='Beautiful Soup' />
                <Icon name={gitIcon} desc='Git Hub' />
                <Icon name={jupyterIcon} desc='Jupyterlab' />
                <Icon name={tableauIcon} desc='Tableau' />
                <Icon name={biIcon} desc='Power BI' />
                <Icon name={adobeIcon} desc='Adobe Cloud' />
                <Icon name={hadoop} desc='Hadoop' />
                <Icon name={kafka} desc='Kafka' />
                <Icon name={spark} desc='Spark' />
                <Icon name={airflow} desc='Airflow'/>
                <Icon name={awsIcon} desc='AWS' />
                <Icon name={sageIcon} desc='SageMaker' />
                <Icon name={htmlIcon} desc='HTML' />
                <Icon name={cssIcon} desc='CSS' />
                <Icon name={bootstrapIcon} desc='Bootstrap' />
                <Icon name={javaIcon} desc='Javascript' />
                <Icon name={reactIcon} desc='React' />
                <Icon name={nodeIcon} desc='Node.js' />
            </div>
        </div>
    );
}

function Icon({ name, desc }) {
    return (
        <div className='p-2 d-flex flex-column align-items-center'>
            <img className='p-1 justify-content-center' id='image-icon' src={name} alt={desc} />
            <p className='text-center'>{desc}</p>
        </div>
    );
}
