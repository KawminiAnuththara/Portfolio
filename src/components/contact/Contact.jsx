import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { motion } from "framer-motion";

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "123@KDka", // Replace with your EmailJS service ID
        "template_ujxt4vq", // Replace with your EmailJS template ID
        formData,
        "CFDutF7H3rxNr5JLr" // Replace with your EmailJS user ID (API key)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setSuccess("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      id="contact"
      className="contactC"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainerC" variants={variants}>
        <motion.h1 variants={variants}>Contact Me</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Name</h2>
          <span>K.D.Kawmini Anuththara Kalubowila</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>anuththarakawmini@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Mobile</h2>
          <span>077-4845647</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>LinkedIn</h2>
          <span>www.linkedin.com/in/kawmini-anuththara</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>GitHub</h2>
          <span>https://github.com/KawminiAnuththara</span>
        </motion.div>
      </motion.div>

      <div className="formContainerC">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg  viewBox="0 0 512 512">
            <g>
              <motion.path
                strokeWidth={2}
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M255.998,0.002C114.606,0.012,0.01,114.604,0,256c0.01,141.406,114.65,255.328,255.926,255.998h0.334
                l0.297-0.009c27.124,0.038,49.507-8.527,64.961-22.594c15.468-14.01,23.727-33.254,23.708-52.736
                c0.02-9.148-1.914-18.306-5.521-27.024c6.086-3.464,10.143-6.612,11.301-7.444c4.152-2.957,16-18.766,7.693-31.79
                c-8.344-13.014-38.042-42.678-46.152-47.702c-8.086-5.015-21.598-0.124-28.105,9.426c-6.526,9.55-11.674,6.689-11.674,6.689
                s-18.516-14.957-44.124-66.621c-25.607-51.694-26.263-75.454-26.263-75.454s0.833-5.847,12.388-5.263
                c11.53,0.621,23.598-7.168,24.516-16.66c0.928-9.464-4.698-51.091-10-65.598c-5.316-14.516-25.062-14.65-29.928-13.138
                c-4.89,1.502-55.033,13.712-59.014,66.21c-3.966,52.506,9.565,100.18,28.943,139.309c19.387,39.119,49.128,78.765,93.3,107.406
                c17.89,11.598,35.058,13.1,49.493,10.67c2.483,5.54,3.718,11.291,3.746,16.985c-0.028,11.292-4.621,22.354-14.066,30.966
                c-9.469,8.564-24.071,14.928-45.2,14.967l-0.516,0.009C130.797,481.96,29.387,381.09,29.397,256
                c0.01-62.621,25.339-119.186,66.367-160.237c41.053-41.023,97.612-66.354,160.234-66.364c62.621,0.01,119.181,25.34,160.232,66.364
                c41.033,41.052,66.354,97.606,66.373,160.237c-0.01,38.67-9.666,74.966-26.698,106.784c-9.531,17.837-21.397,34.23-35.177,48.812
                c-5.569,5.905-5.301,15.206,0.594,20.776c5.894,5.578,15.205,5.32,20.784-0.584c15.54-16.46,28.937-34.976,39.712-55.139
                C501.071,340.717,512,299.589,512,256C511.98,114.604,397.389,0.012,255.998,0.002z"
              />
            </g>
          </svg>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            rows={8}
            name="message"
            required
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </motion.form>
        {success && <p className="success-message">{success}</p>}
      </div>
    </motion.div>
  );
};

export default Contact;
