import React from "react";
import Marquee from "react-fast-marquee";

export function Aboutit() {
  return (
    <>
      <div className="container-fluid mainContainer">
        <div className="textContainer mt-5 text-center">
          <h1>Daily Dose of Nutrition</h1>
          <p>
            Milky Mist is dedicated to spreading the daily dose of nutrition -
            all day, every day. From being the initial<br /> ingredient to
            delivering the finishing touch, we make sure our products add the
            nutritional value you deserve.<br />
            <span className="fw-bold">
              With our range of 400+ SKU's, we’re committed to making India, a
              healthy India.
            </span>
          </p>
          <button className="border-outline-dark bg-primary text-white rounded-pill small p-2">
            View all products
          </button>
        </div>

        <div className="container-fluid mt-5">
          <Marquee pauseOnHover={true} gradient={false} speed={50} autoFill={true}>
            
            <div className="marquee-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JCsb_vReAcZkZKlnOxlvLmGIN2PaXBwlLQ&s"
                alt="Card 1"
              />
            </div>

            <div className="marquee-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYZbW1WK0VULjYD4v9OddT_zEJ-jaokqQ4A&s"
                alt="Card 2"
              />
            </div>

            <div className="marquee-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdONTSDYu8Xa3_iO468TeHL3R-6KI7E9pzw&s"
                alt="Card 3"
              />
            </div>

            <div className="marquee-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjl8TGbL87VOg9pnOLVDQANS4AVShQFJs4sA&s"
                alt="Card 4"
              />
            </div>

          </Marquee>
        </div>
      </div>
    </>
  );
}
