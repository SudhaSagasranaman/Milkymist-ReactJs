import React from "react";

export function CardOverlay() {
  return (
    <>
      <div className="card bg-dark border-0 rounded-5">
        <img
          className="card-img rounded-5"
          src="https://pbs.twimg.com/media/EAoXAFZU8AAJmtk.jpg:large"
          alt="Card overlay"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center text-white">
          <p className="card-text">
            <span className="overlay-subtitle d-block">Recipes & Cooking Videos</span>
            <span className="overlay-title d-block fw-bold">MilkyMist TV</span>
            <span className="overlay-desc d-block">
              Tune into Milky Mist TV for your daily dose of cooking videos
            </span>
          </p>
          <button className="btn btn-outline-light btn-sm rounded-pill mt-2 px-4">

  Watch Now
</button>

        </div>
      </div>
    </>
  );
}
