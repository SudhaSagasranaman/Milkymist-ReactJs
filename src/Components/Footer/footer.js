import React from "react";
export function Footer(){
    return(
        <>
<div className="container-fluid bg-primary text-white mt-5 p-4 smallFont">
  <div className="row text-center text-md-start align-items-center">
    
    {/* Brand */}
    <div className="col-12 col-md-3 mb-3 mb-md-0">
      <h2 className="m-0">Milkymist</h2>
    </div>

    {/* Links */}
    <div className="col-12 col-md-6 mb-3 mb-md-0">
      <div className="row">
        <div className="col-12 col-md-12">
          <a href="#" className="me-md-3">Online Stores</a>
          <a href="#" className="me-md-3">Products</a>
          <a href="#" className="me-md-3">Reach Us</a>
          <a href="#" className="me-md-3">About Us</a>
          <a href="#" className="me-md-3">Privacy Policy</a>
          <a href="#">Terms Of Use</a>
        </div>
      </div>
    </div>

    {/* Social icons */}
    <div className="col-12 col-md-3 fs-5">
      <a href="https://www.linkedin.com" target="_blank" className="me-2"><i className="bi bi-linkedin"></i></a>
      <a href="https://www.facebook.com" target="_blank" className="me-2"><i className="bi bi-facebook"></i></a>
      <a href="https://www.youtube.com" target="_blank" className="me-2"><i className="bi bi-youtube"></i></a>
      <a href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></a>
    </div>
  </div>

  <hr className="border-2 border-light opacity-75 mt-3" />
</div>
        </>
    );
}