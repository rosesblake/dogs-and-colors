import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="NavBar">
      <a className="Links">
        <Link to="/dogs">Dogs</Link>
      </a>
    </nav>
  );
}

export default Nav;
