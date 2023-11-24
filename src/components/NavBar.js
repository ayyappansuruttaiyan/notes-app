import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
// import Notes from "./Notes";
function NavBar({ onMenuClick }) {
  const [isClicked, setIsClicked] = useState(true);

  function handleActive() {
    setIsClicked(true);
  }
  return (
    <nav className="container text-xl mt-2">
      <ul className="m-4">
        <li
          className={`mt-2 p-2 rounded ${
            isClicked === true ? "bg-stone-200 w-60" : ""
          } `}
          onClick={handleActive}
        >
          <Link to="/dashboard">
            <span>
              <i className="fa-solid fa-house"></i>
            </span>
            Home
          </Link>
        </li>
        <li className="mt-2 w-60 p-2 rounded">
          <Link to="/search">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            Search
          </Link>
        </li>

        <li className="mt-2 w-60 p-2 rounded">
          <Link to="/notes">
            <span>
              <i className="fa-solid fa-note-sticky"></i>
            </span>
            Notes
          </Link>
        </li>
        <li className="mt-2 w-60 p-2 rounded">
          <Link to="/tasks">
            <span>
              <i className="fa-solid fa-circle-check"></i>
            </span>
            Tasks
          </Link>
        </li>
        <li className="mt-2 w-60 p-2 rounded">
          <Link to="/archive">
            <span>
              <i className="fa-solid fa-box-archive"></i>
            </span>
            Archive
          </Link>
        </li>
        <li className="mt-2 w-60 p-2 rounded ">
          <Link to="/bin">
            <span>
              <i className="fa-solid fa-trash"></i>
            </span>
            Bin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
