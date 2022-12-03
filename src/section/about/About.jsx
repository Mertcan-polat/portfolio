import React from "react";
import "./about.css";
import Logo from "../../foto/mertcann.jpg";
import Qr from "../../foto/kirk.jpg";

import Card from "../../components/Card";
import "./data";
import Cv from "../../foto/MertcanPolatCv A.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
export default function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={Logo} alt="Logo" className="img__about" />
            <br />
            <img src={Qr} alt="Logo" className="img__about" />
          </div>
        </div>
        <div className="about__rigth">
          <h2 className="onemlı">About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            I graduated from Eskisehir technical university in materials science
            and engineering. I was very impressed with the 'Pyhton' course you
            took in my department and started coding. During my academic career,
            I managed to accumulate about 1 year of work experience. I have had
            the privilege of working as a freelancer in a front-end developer
            role in my spare time, where I have learned valuable professional
            skills such as website architecture, programming and web page
            content. In both my academic and professional life, I have been
            consistently praised by my professors and colleagues for my hard
            work. While working on academic, extracurricular or professional
            projects, I apply my proven technical, teamwork and research skills
            that I hope to use in a Software Development role at your company.
          </p>
          <a href={Cv} download className="btn primary">
            Download Cv <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}
