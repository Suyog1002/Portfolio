import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#e0f7fa', minHeight: '100vh' }}>
      <div className="text-center mt-3"> 
        <h1 className="display-4">Suyog Ambadare</h1>
        <p className="lead">Email: suyogambadare1003@gmail.com</p>
      </div>

      <section id="home" className="my-5">
        <div className="container">
          <div className="text-center">
            <h2 className="display-4">Welcome to My Portfolio</h2>
            <p className="lead">
              As an enthusiastic computer science student, I am driven by a fervent passion for solving complex problems.
              Actively seeking opportunities in dynamic and stimulating work environments, I am committed to achieving
              goals through my keen critical thinking skills and an unwavering desire for continuous learning. My
              proactive and collaborative approach to teamwork, combined with a dedication to staying abreast of the
              latest technological advancements, positions me to contribute innovative solutions in the ever-evolving
              field of computer science.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="display-5">Education</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <h5>Indian Institute of Information Technology Pune</h5>
                <h6>B-Tech (Computer Science and Engineering)</h6>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <Link className="btn btn-outline-primary" to="/portfolio">
              Explore My Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
