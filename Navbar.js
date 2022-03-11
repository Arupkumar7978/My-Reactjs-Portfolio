import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <h1>{props.title}</h1>
          </div>

          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="fas fa-user-graduate"></i> About Me
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <i className="fas fa-laptop-code"></i> Projects
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="fab fa-facebook-messenger"></i> Contact
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="fas fa-info-circle"></i> More
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
