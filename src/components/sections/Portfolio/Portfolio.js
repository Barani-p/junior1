"use client";

import "./Portfolio.css";
import Image from "next/image";
import frameImg from "../../../../public/images/Frame.png";
import { useState } from "react";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="portfolio" id="project">
      <p className="sr-only" aria-label="Portfolio section description">
  Explore my latest UI/UX design projects including web apps, mobile apps, and dashboard interfaces designed for performance and usability.
</p>
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
          <Image
            src={frameImg}
            alt="Lirante website UI UX design project showcasing modern interface and user experience"
            loading="lazy"
          />

          <div className="portfolio-overlay">
            <h3>Lirante</h3>
            <p>
              A modern UI/UX design project focused on creating intuitive user experiences 
              and improving customer engagement.
            </p>
          </div>
        </div>

        <div
          className="portfolio-card"
          onMouseEnter={() => setActiveIndex(1)}
        >
          <Image
            src={frameImg}
           alt="Lirante website UI UX design project showcasing modern interface and user experience"
            loading="lazy"
          />

          <div className="portfolio-overlay">
            <h3>Lirante</h3>
            <p>
              A modern UI/UX design project focused on creating intuitive user experiences 
              and improving customer engagement.
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