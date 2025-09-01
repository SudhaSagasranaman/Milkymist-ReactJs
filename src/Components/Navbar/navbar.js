import React from "react";
export function Navbar(){
    return(
        <>
         {/* Navbar*/}

<div className="container-fluid">
  <nav className="navbar navbar-expand-lg bg-white">
    <div className="container-fluid fs-6">
    <span className="h3 fst-italic fw-bold text-primary shadow-sm">
    MILKYMIST </span>
      
 <ul className="nav d-flex justify-content-evenly w-100 fw-bold smallFont">
  <li className="nav-item">
    <a className="nav-link active text-success lineColor" aria-current="page" href="#">HOME</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-success" href="#">MENU</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-success" href="#">ABOUT US</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-success" href="#">STORE LOCATOR</a>
  </li>
    <li className="nav-item">
    <a className="nav-link text-success bg-success text-white" href="#">TALK TO US</a>
  </li>

</ul>
</div>
  </nav>
</div>
</>
      
    );
}