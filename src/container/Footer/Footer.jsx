import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [nameField, setNameField] = useState("Your Name");
  const [emailField, setEmailField] = useState("Your Email");
  const [messageField, setMessageField] = useState("Your message");

  const [emailError, setEmailError] = useState("");

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if(name === "email") {
      const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!regEx.test(value) && value) {
        setEmailError("Invalid Email");
      }
      else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e) => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(name === "") {
      setNameField("Please enter your name.");
    }

    else if(!regEx.test(email)) {
      setEmailField("Please enter your email");
    }

    else if(message === "") {
      setMessageField("Please enter your message.")
    }

   else {
      setLoading(true);

      const contact = {
        _type: 'contact',
        name: name,
        email: email,
        message: message,
      };

      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & <span>chat with me</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:kfaisal.se@gmail.com" className="p-text">kfaisal.se@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 8298242204" className="p-text">+91 8298242204</a>
        </div>
      </div>

      <div className="social__links">
        <a href="https://www.linkedin.com/in/kfaisal-se/">
          <div>
            <FaLinkedinIn />
          </div>
        </a>

        <a href='https://leetcode.com/kfaisal-se/'>
          <div>
            <SiLeetcode />
          </div>
        </a>

        <a href='https://github.com/kfaisal-se'>
          <div>
            <BsGithub />
          </div>
        </a>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder={nameField} name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder={emailField} name="email" value={email} onChange={handleChangeInput} />
            <span className="s-text">{emailError}</span>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder={messageField}
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit} >{loading ? 'Sending...' : 'Send Message'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for <span>getting in touch!</span>
          </h3>
        </div>
      )}

      
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
  // 'app__whitebg',
);