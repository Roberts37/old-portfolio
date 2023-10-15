import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';

export default function Project() {
  const projectData = {
    'Text Summarization': {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://github.com/YourGitHubUsername/TextSummarizationProject',
    },
    'Computer Viz': {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://github.com/YourGitHubUsername/TextSummarizationProject',
    },
    'Stock Prediction LSTM': {
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
      download: 'Real Estate Analysis.xlsx',
    },
  };

  const [activeProject, setActiveProject] = useState(null);

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
              {activeProject === 'Real Estate Investment' ? (
                <a
                  href={projectData[activeProject].download}
                  download
                >
                  Download Project
                </a>
              ) : (
                <a
                  href={projectData[activeProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              )}
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