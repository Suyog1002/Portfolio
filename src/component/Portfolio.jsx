import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <section id="portfolio" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
        <h2 className="mb-4">My Projects</h2>

        <div className="project">
          <h3>Social Media Blogging Platform</h3>
          <h5>TechStack - (HTML, CSS, JavaScript, Node.js, Express.js, MongoDB)</h5>
          <ul>
            <li>The Social Blogging Platform is a user-friendly and interactive web application that aims to create a platform for bloggers and content creators.</li>
            <li>This platform integrates user authentication mechanisms to ensure secure access. Users can create accounts, log in securely, and maintain their profiles.</li>
            <li>The project incorporates a modern and interactive chat box that provides a seamless and real-time messaging experience, allowing users to connect and communicate efficiently.</li>
          </ul>
        </div>

        <div className="project">
          <h3>NewsMarket</h3>
          <h5>TechStack - (HTML, CSS, JavaScript, React.js, Bootstrap)</h5>
          <ul>
            <li>NewsMarket is a daily news-fetching website developed using React.js. It leverages the NewsAPI to provide real-time access to top headlines, delivering a user-friendly interface for up-to-the-minute news coverage.</li>
            <li>This platform shares a wide range of news in different categories to give users a diverse and interesting news experience.</li>
          </ul>
        </div>

        <div className="project">
          <h3>Ecommerce Website</h3>
          <h5>TechStack - (Next.js, Sanity, Stripe)</h5>
          <ul>
            <li>This E-Commerce Web Application is an online platform designed to facilitate a seamless shopping experience for customers. The web application allows users to browse and purchase a wide range of products with its user-friendly interface.</li>
            <li>By providing an efficient cart and checkout experience, enabling users to manage their selected items, adjust quantities, and initiate the payment process with the help of Stripe smoothly.</li>
          </ul>
        </div>

        <Link className="btn btn-outline-primary mt-4" to="/skills">
          Explore Skills Section
        </Link>
      </section>
    </div>
  );
};

export default Portfolio;
