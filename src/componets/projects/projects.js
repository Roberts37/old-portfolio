import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';

export default function Project() {
  const projectData = {
      // Define project data with descriptions and links
    'Text Sentiment': {
      description:
        'The "Yelp Sentiment Analysis with BERT" project explores sentiment analysis on Yelp reviews, harnessing the power of BERT, a cutting-edge transformer-based model. The journey involves web scraping for review data, applying BERT\'s advanced natural language processing for sentiment analysis, and using pandas to manage the results. This project showcases a blend of web scraping, machine learning, and data manipulation skills, offering insights into customer sentiments for businesses on Yelp.',
      link: 'https://github.com/Roberts37/sentiment-analysis',
    },
    'Face Detection': {
      description:
        'The "Face Detection and Object Localization" project leverages deep learning to create an advanced system for real-time face tracking and object localization. It involves data collection, custom model design, and training for precise results. This project empowers us to make informed decisions in computer vision, robotics, and surveillance by using neural networks.',
      link: 'https://github.com/Roberts37/face-detection-computer_viz',
    },
    'Stock Prediction': {
      description:
        'The "Stock Market Price Prediction with LSTM" project is aimed at predicting stock prices by leveraging deep learning techniques. The project involves data collection, preprocessing, model building, and deployment to create a comprehensive solution for traders and investors. It also provides valuable insights into data-driven decision-making and risk management. This project uses Long Short-Term Memory (LSTM) neural networks to predict stock market prices. It provides a deep learning solution to forecast future stock prices based on historical data. By utilizing TensorFlow and LSTM layers, the model captures temporal patterns in time series data, allowing for more informed trading and investment decisions.',
      link: 'https://github.com/Roberts37/Stock-Price-Prediction',
    },
    'Crypto Trading Bot': {
      description: 'The "Crypto Trading Bot" project is aimed at the financial markets. This project features an algorithmic trading bot that is able to place trades automatically based on technical analysis. The bot is able to trade several different assets and looks at a large time frame defined by the user and determines if the asset is currently in a trend. If the bot finds an asset in a trend it then looks at a smaller time frame and computes technical analysis to find entry signals. After the bot places a trade it watches the market for exit positions to make a profit. The bot is also capable of places stops for risk management.',
      link: 'https://github.com/Roberts37/Crypto-Trading-Bot',
    },
    'AirBNB San Diego': {
      description: 'The "Airbnb - San Diego" data science project is a comprehensive data science endeavor focused on Airbnb property investments within the city of San Diego. This project encompasses data collection, extensive data cleaning, and a meticulous analysis to unveil valuable insights for potential Airbnb hosts and property investors. The objective is to identify prime locations in San Diego where setting up an Airbnb property can yield the highest gross income. By leveraging data-driven decision-making and in-depth statistical analysis, this project assists investors in making informed choices for their real estate ventures.',
      link: 'https://github.com/Roberts37/AirBNB-San-Diego',
    },
    'Real Estate Investment': {
      description:
        'The "Real Estate Investment" analysis project represents a comprehensive financial tool designed to evaluate and optimize real estate investment opportunities. This Excel-based model empowers real estate investors and financial analysts to make data-driven decisions in the dynamic and complex world of real estate.',
      link: 'https://github.com/Roberts37/Real-Estate-Analysis/blob/main/README.md',
    },
  };

 // State to track the active project
 const [activeProject, setActiveProject] = useState(null);

 // Handle click on a project to set it as active
 const handleProjectClick = (name) => {
   setActiveProject(name);
 };

 return (
   <div className="p-3 rounded" id="full">
     <h3 className="text-center">Projects</h3>
     <br />
     <div>
       <ul className="nav flex-row justify-content-center">
         {Object.keys(projectData).map((name) => (
           <ProjectList key={name} name={name} onClick={() => handleProjectClick(name)} />
         ))}
       </ul>
     </div>
     <div className="rounded p-2 m-2" id="project_desc">
       {activeProject ? (
         <div>
           <p id='descriptions'>{projectData[activeProject].description}&nbsp;
             <a
               href={projectData[activeProject].link}
               target="_blank"
               rel="noopener noreferrer"
             >
               GitHub Repository
             </a>
           </p>
         </div>
       ) : (
         <p>Select a project to begin.</p>
       )}
     </div>
   </div>
 );
}

function ProjectList({ name, onClick }) {
 return (
   <button className="m-2 p-2" onClick={onClick}>
     {name}
   </button>
 );
}