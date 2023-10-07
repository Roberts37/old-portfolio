import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';

export default function Project() {
  const projectDescriptions = {
    'Text Summarization': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Stock Prediction RNN': 'The Stock Price Prediction with Recurrent Neural Networks (RNN) project demonstrates the application of deep learning techniques to forecast the future prices of various stocks. By harnessing the power of RNNs, this project offers a data-driven approach to financial forecasting, allowing investors and traders to make more informed decisions in the volatile world of stock markets.',
    'Crypto Trading Bot': 'Description for Crypto Trading Bot project...',
    'AirBNB San Diego': 'Description for AirBNB San Diego project...',
    'Real Estate Investment': 'The Real Estate Investment Analysis project represents a comprehensive financial tool designed to evaluate and optimize real estate investment opportunities. This Excel-based model empowers real estate investors and financial analysts to make data-driven decisions in the dynamic and complex world of real estate.',
  };

  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (name) => {
    setActiveProject(name);
  };

  return (
    <div className=' p-3 rounded' id='full'>
      <h3 className='text-center '>Projects</h3><br />

      <div className=''>
        <ul className='nav flex-row justify-content-center'>
          {Object.keys(projectDescriptions).map((name) => (
            <ProjectList
              key={name}
              name={name}
              onClick={() => handleProjectClick(name)}
            />
          ))}
        </ul>
      </div>

      <div className=' rounded p-2 m-2' id='project_desc'>
        <p>{activeProject ? projectDescriptions[activeProject] : 'Select a project to view its description.'}</p>
      </div>
    </div>
  );
}

function ProjectList({ name, onClick }) {
  return (
    <button className='m-2 p-2' onClick={onClick}>
      {name}
    </button>
  );
}
