import React from "react";
import "./contact.css"
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <>
    <section className="contact">
        
      <form action="https://formspree.io/f/mlekoprz" method="POST">
      <h1>Contact Us</h1>
        <label htmlFor="firstName">
          First Name :
          </label>
          <input type="text" name="first-name" required/>
        
        <label htmlFor="lastName">
          Last Name : </label>
          <input type="text" name="last-name" required/>
        
        <label>
          Your email:
          </label>
          <input type="email" name="email" required/>
        
        <label>
          Your message:
          </label>
          <textarea name="message" required></textarea>
        
        <button type="submit">Send</button> 
      </form>
    </section>
    </>
  );
};

export default Contact;
