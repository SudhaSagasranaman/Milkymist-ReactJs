import React from "react";

export function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid fs-6">
            {/* Brand / Logo */}
            <span className="h3 fst-italic fw-bold text-primary shadow-sm">
              MILKYMIST
            </span>

            {/* Hamburger button (visible on mobile) */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto fw-bold smallFont">
                <li className="nav-item">
                  <a
                    className="nav-link active text-success lineColor"
                    aria-current="page"
                    href="#"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-success" href="#">
                    MENU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-success" href="#">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-success" href="#">
                    STORE LOCATOR
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-success bg-success text-white"
                    href="#"
                  >
                    TALK TO US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
