import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
// import Notes from "./Notes";
function SideBar() {
  return (
    <nav className="container text-xl mt-2">
      <ul className="m-4">
        <li className="mt-2 bg-stone-200 w-60 p-2 rounded">
          <Link to="/">
            <span>
              <i className="fa-solid fa-right-to-bracket"></i>
            </span>
            Login
          </Link>
        </li>
        <li className="mt-2 w-60 p-2 rounded">
          <Link to="/signup">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
