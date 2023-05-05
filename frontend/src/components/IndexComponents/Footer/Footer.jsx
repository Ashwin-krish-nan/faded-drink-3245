import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterParent">
      <div className="Footer1" data-aos="fade">
        <div>
          <img
            style={{ width: "280px" }}
            src="Images/IndexPageImages/logo.png"
            alt="acee"
            data-aos="fade"
          />
          <br />
          <br />
        </div>
        <div>
          <p className="footerpara">
            © 2023 <span className="footergoldenpara">Soul Goodman Pvt ltd</span>{" "}
            <br /> Designed and Developed by <br />
            <span className="footergoldenpara">Heisenbery group</span>
          </p>
        </div>
      </div>
      <div className="Footer2">
        <p className="footeremail">info@bettercallsaul.com</p>
        <p>Contact at: +91 99110 45351</p>
      </div>
    </div>
  );
};

export default Footer;
