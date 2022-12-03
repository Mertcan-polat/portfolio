import React from "react";
import "./services.css";
import Frontend from "../services/Frontend";
import Backend from "../services/Backend";
const Services = () => {
  return (
    <section id="services">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container container grid">
        <Frontend></Frontend>
        <Backend></Backend>
      </div>
    </section>
  );
};

export default Services;
