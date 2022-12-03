import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g03wnv1",
      "template_5ryxrps",
      form.current,
      "YIVw5gYogaL7QPc6F"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className="section__title">Get in touch</h2>
      <h4 className="section__subtitle">Contact Me</h4>
      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <h4 className="contact__card-title">Email</h4>
              <span className="contact__card-data">
                mertcanpolatt06@gmail.com
              </span>
              <br />
              <a href="mertcanpolatt06" className="contact__button">
                Write Me with email <AiOutlineMail></AiOutlineMail>
              </a>
            </div>

            <div className="contact__card">
              <h4 className="contact__card-title">Contact Me</h4>
              <span className="contact__card-data"></span>

              <a
                href="https://www.linkedin.com/in/mertcan-polat-17b687136/"
                className="contact__button"
                target="_blank"
              >
                Write Me linkedln <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="cotact__form-input"
                  placeholder="İnsert your name"
                />
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="cotact__form-input"
                  placeholder="İnsert your email"
                />
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag">Project</label>
                <textarea
                  className="cotact__form-input"
                  project
                  cols="30"
                  rows="10"
                  placeholder="Write your project"
                ></textarea>
              </div>
              <button className="button-85">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
