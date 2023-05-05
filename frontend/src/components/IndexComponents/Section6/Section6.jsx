import React from "react";
import "./Section6.css";

import NumBumCard from "./NumBumCard";

const Section6 = () => {
  return (
    <div className="SectionSix">
      <h1 className="AboutHead">About Us</h1>
      <div className="SecSixParent">
        <div className="SecSixLeft" data-aos="fade-up">
          <h1 style={{ fontSize: "47px", transform: "translateY(-30px)" }}>
            <label style={{ color: "rgb(83, 92, 40)", fontSize: "40px" }}>
              10 years
            </label>{" "}
            <br /> of helping <br /> people and making them smile.
          </h1>
        </div>
        <div className="SecSixRight">
          <NumBumCard
            number="100"
            head="Honors & Awards"
            text="All because of the love and support of our customers"
            delay="50"
          />
          <NumBumCard
            number="100"
            head="Professional Lawyers"
            text="To help you out in the most adverse conditions and win you your battle"
            delay="150"
          />
          <NumBumCard
            number="400"
            head="Successful Cases"
            text="That made peoples life better 
and engraved our mark in 
society's betterment"
            delay="50"
          />
          <NumBumCard
            number="1100"
            head="Happy Customers"
            text="The wellness of the customers is our topmost priority."
            delay="200"
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
