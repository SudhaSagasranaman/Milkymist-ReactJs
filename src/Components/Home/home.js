import React from "react";
export function Home(){
    return( 
    <>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.wixstatic.com/media/60b717_0f26f7779224408c89d60ea35730da10~mv2.png/v1/fill/w_2400,h_1254,al_c/60b717_0f26f7779224408c89d60ea35730da10~mv2.png"  alt = "noimg" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/kj-OOzeXC0E/maxresdefault.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*Hfx15CZypl784Imkmq-g5g.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </>
    );
   }

