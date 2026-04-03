"use client";

import "./Portfolio.css";
import { useState } from "react";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="portfolio" id="project">
      
      <div className="portfolio-header">
        <h2 className="portfolio-title">
          Lets have a look at my <span>Portfolio</span>
        </h2>

        <button className="portfolio-btn" type="button">
          See All
        </button>
      </div>

      <div className="portfolio-slider">
        
        <div
          className="portfolio-card"
          onMouseEnter={() => setActiveIndex(0)}
        >
          <img
            src="images/Frame.png"
            alt="Lirante Project"
            loading="lazy"
          />

          <div className="portfolio-overlay">
            <h3>Lirante</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div
          className="portfolio-card"
          onMouseEnter={() => setActiveIndex(1)}
        >
          <img
            src="images/Frame.png"
            alt="Lirante Project"
            loading="lazy"
          />

          <div className="portfolio-overlay">
            <h3>Lirante</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed lobortis orci elementum egestas lobortis.
            </p>
          </div>
        </div>

      </div>

      <div className="dott">
        <span className={activeIndex === 0 ? "active" : ""}></span>
        <span className={activeIndex === 1 ? "active" : ""}></span>
      </div>

    </section>
  );
}