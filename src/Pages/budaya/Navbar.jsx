import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <div>
      <section id="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container-fluid"> {/* Ubah dari "container" ke "container-fluid" */}
            <a className="navbar-brand d-flex align-items-center" href="#Home">
              <img src="/MyNusantara.png" alt="Logo" className="logo" /> {/* Ganti dengan path logo yang sesuai */}
              <span className="ms-2">
                <span className="outline">MY</span>
                <span className="text-primary">NUSANTARA</span>
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/news" className="nav-link">
                    News
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
