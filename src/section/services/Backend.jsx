import React from "react";
import { AiFillCheckCircle, AiFillStar } from "react-icons/ai";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer Skills</h3>
      <div className="skill__box">
        <div className="skills__gruop">
          <div className="skills__data">
            <AiFillCheckCircle></AiFillCheckCircle>
            <div>
              <h3 className="skills__name">C#</h3>
              <span className="skills__level">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
              </span>
            </div>
          </div>
          <div className="skills__data">
            <AiFillCheckCircle></AiFillCheckCircle>
            <div>
              <h3 className="skills__name">.NET CORE</h3>
              <span className="skills__level">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
              </span>
            </div>
          </div>
          <div className="skills__data">
            <AiFillCheckCircle></AiFillCheckCircle>
            <div>
              <h3 className="skills__name">ASP.NET</h3>
              <span className="skills__level">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
