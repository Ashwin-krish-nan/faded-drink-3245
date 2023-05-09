import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [navx, setnavx] = useState(false);
  const handleNav = () => {
    setnavx((prev) => !prev);
    let pm = document.getElementsByClassName("NavMenu")[0];
    let ham = document.getElementsByClassName("holaaaa")[0];
    if (navx) {
      pm.style.left = "0px";
      ham.src = "close.webp";
    } else {
      pm.style.left = "100%";
      ham.src = "hamm.png";
    }
  };
  return (
    <div className="NavBarParent" data-aos="fade">
      <div className="MainLogo">
        <NavLink to="/">
          <img
            style={{ width: "100%" }}
            src="Images/IndexPageImages/logo.png"
            alt="bcslogo"
          />
        </NavLink>
      </div>
      <div className="NavMenu">
        <NavLink className="buttonunderline">Home</NavLink>
        <NavLink className="buttonunderline">Services</NavLink>
        <NavLink className="buttonunderline">About</NavLink>
        <NavLink className="buttonunderline">Contact</NavLink>
        <NavLink to="/login">
          <button className="SecOneMeetLawBtnS">
            Sign in
          </button>
        </NavLink>
      </div>
      <div onClick={handleNav} data-nav-open className="hamburger">
        <img
          className="holaaaa"
          style={{ width: "24px", zIndex: "10000" }}
          src="hamm.png"
          alt="="
        />
      </div>
    </div>
  );
};

export default Navbar;
