import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className="container mt-5" style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '15px' }}>
      <div className="skills-container text-center">
        <h2 className="mb-4">Skills</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="skill-category mb-4">
              <h2 className="mb-3">
                <FontAwesomeIcon icon={faLaptopCode} /> Technical Skills
              </h2>
              <ul className="list-unstyled">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>OOP</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="skill-category">
              <h2 className="mb-3">
                <FontAwesomeIcon icon={faServer} /> Database
              </h2>
              <ul className="list-unstyled">
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
