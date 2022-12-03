import React from "react";
import "./footer.css";
import data from "./data";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Mertcan POLAT</h2>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social-link">
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
      <span className="footer__copy">
        &#169; Mertcan POLAT. All rigths reserved
      </span>
    </footer>
  );
};

export default Footer;
