import React from "react";
export function CardOverlay(){
    return(
        <>
          <div className="card bg-dark">
            <img className="card-img" src="https://pbs.twimg.com/media/EAoXAFZU8AAJmtk.jpg:large" alt="Card image"/>
            <div className="card-img-overlay text-start text-dark mt-10  fw-bold text-shadow">
                <p className="card-text"><span className = "fs-3">Recipes & Cooking Videos</span>
                <br/>  
                                         <span className = "fs-1">MilkyMist TV</span><br/>
                                        <span className = "fs-6">Tune into Milky Mist TV for your daily dose of<br/> cooking videos</span></p>
<button className="btn rounded-pill btn-outline-dark mx-auto">Watch Now</button>
            </div>
        </div>
        </>
    );
}
    
