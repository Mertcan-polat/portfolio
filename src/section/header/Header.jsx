import React from "react";
import "./header.css";
import data from "./data";
import Headerİmage from "../../foto/indir.jpg";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={Headerİmage} alt="Header Portait" />
        </div>
        <h3>Mertcan POLAT</h3>
        <h4>Frontend Developer</h4>
        <p>
          We are a team of 3 people in the company I work for. At the head of
          this team is the CEO of the company and we are serving as 2 juniors.
          The technologies I use are as follows. <br />
          React.js
          <br /> C# <br />
          .NET core
          <br /> ASP.NET
          <br /> Bootstrap
          <br /> Tailwindcss
          <br /> RestSharp
          <br /> API.
          <br /> As a Metallica fan, I wanted to include the band members in the
          site I coded.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#services" className="btn light">
            My work
          </a>
        </div>
        <div className="header__social">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
