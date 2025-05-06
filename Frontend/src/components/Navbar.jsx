// Navbar.js
import React from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="nav1">
        <img src="./burger_favicon.png" alt="" height={70} />
        <div className="logo">BurgirrHUB</div>
        <div className="navLinks">
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              element.title !== "RESERVATION" && (
              <div key={element.id}>
                <Link
                  to={element.link}
                  spy={true}
                  smooth={true}
                  duration={1500}
                >
                  {element.title}
                </Link>
              </div>
              )
            ))}
            <div>
              <NavLink to="/reservations">RESERVATION</NavLink>
            </div>
          </div>
            <div>
                  <NavLink to="/login">
                    <button className="manbtn">Manager Dashboard</button>
                  </NavLink>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
