import React, { useState } from 'react';

const Contact = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setIsSubmitted(true);
    }, );
  };

  return (
    <div className="container mt-4">
      
      {isSubmitted ? (
        <div className="alert alert-success" role="alert">
          Message sent successfully!
        </div>
      ) : (
        
        <div>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
