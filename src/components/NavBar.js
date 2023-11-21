import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
function NavBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 left-container">
          <div className="profile">
            <img src="" alt="avatar" />
            <h5>John Doe</h5>
            <p>johndoe@gmail.com</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <i class="fa-solid fa-house"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/search">
                  <i class="fa-solid fa-magnifying-glass"></i>Search
                </Link>
              </li>

              <li>
                <Link to="/notes">
                  <i class="fa-solid fa-note-sticky"></i> Notes
                </Link>
              </li>
              <li>
                <Link to="/tasks">
                  <i class="fa-solid fa-circle-check"></i> Tasks
                </Link>
              </li>
              <li>
                <Link to="/archive">
                  <i class="fa-solid fa-box-archive"></i>
                  Archive
                </Link>
              </li>
              <li>
                <Link to="/bin">
                  <i class="fa-solid fa-trash"></i>Bin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-8">Welcome John Doe</div>
      </div>
    </div>
  );
}

export default NavBar;
