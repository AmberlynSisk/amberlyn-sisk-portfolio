import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const form = useRef()
  
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3l6wsxg', 'portfolio_template', form.current, 'nIzI8KHMKY5nzi59E')
        .then((result) => {
              setSuccessMessage(true);
        }, (error) => {
              setErrorMessage(true);
        });
        e.target.reset()
    };

  return (
    <div className="ContactContainer" id="contact">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="FormContainer">
            <form ref={form} onSubmit={sendEmail}>
                <h1>Let's Work Together!</h1>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="number" placeholder="Phone Number" />
                <textarea name="message" placeholder="Message" />
                <button type="submit">Send</button>
            </form>
        </div>
        <a href="https://www.linkedin.com/in/amberlyn-sisk" target="_blank"><BsLinkedin /> LinkedIn Profile</a>
        <h2 className="successMessage" style={{display: successMessage ? "block" : "none"}}>Email sent successfully! I look forward to speaking with you soon!</h2>
        <h2 className="errorMessage" style={{display: errorMessage ? "block" : "none"}}>UH OH! Seems like something went wrong, please try to send your message again.</h2>

    </div>
  )
}

export default Contact