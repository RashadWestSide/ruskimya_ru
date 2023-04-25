import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css'

function ContactForm() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">Отправить</button>
      </form>
    </div>
  )
}

export default ContactForm
