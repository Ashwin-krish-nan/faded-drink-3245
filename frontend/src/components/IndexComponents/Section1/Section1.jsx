import React from "react";
import "./Section1.css";
import { useNavigate } from "react-router-dom";
const Section1 = () => {
  let navigate = useNavigate();
  let redirect = () => {
    navigate("/lawyers");
  };

  return (
    <div className="SecOneParent">
      <div className="SecOneLeft" data-aos="fade-up">
        <h1 className="highQualityLaw">
          A law firm <br /> with a passion for success.
        </h1>
        <br />
        <br />
        <div className="SecOneLeftButtons" data-aos="fade-up">
          <button onClick={redirect} className="SecOneBookAppoBtn">
            Book An Appointment
          </button>
          <button onClick={redirect} className="SecOneMeetLawBtn">
            Meet Our Lawyers
          </button>
        </div>
        <div>
          <hr style={{ width: "74%" }} /> <br />
          <p style={{ color: "grey" }}>
            Defend your constitutional rights with <br /> right Legal support
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="SecOneRight" data-aos="fade-up">
        <img
          style={{ width: "80%", borderRadius:"30px" }}
          // src="https://img.freepik.com/free-photo/portrait-happy-woman-with-digital-tablet_329181-11681.jpg?w=360&t=st=1683292828~exp=1683293428~hmac=962af6e4752ae447734c4c6efc1c4e93b903fdbb991cebb60eaee0174cc51e80"
          src="https://i.pinimg.com/originals/41/9f/2f/419f2ff5df0faba958ccc8e64728cdcd.jpg"

          alt="Brownben"
        />
      </div>
    </div>
  );
};

export default Section1;
