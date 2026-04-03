"use client";

import "./Services.css";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="services" id="Services">

      <div className="services-bg">
        <Image
          src="/images/light-yellow1.png"
          alt="bg-element-1"
          width={432.334}
          height={441.907}
          style={{
            position: "absolute",
            top: "20%",
            left: "-12%",
            zIndex: 0,
            pointerEvents: "none",
            objectFit: "contain",
          }}
        />

        <Image
          src="/images/light-yellow2.png"
          alt="bg-element-2"
          width={180.945}
          height={180.945}
          style={{
            position: "absolute",
            top: "5%",
            left: "42%",
            zIndex: 0,
            pointerEvents: "none",
            objectFit: "contain",
            filter: "blur(2px)",
          }}
        />

        <Image
          src="/images/light-yellow3.png"
          alt="bg-element-3"
          width={750}
          height={750}
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-13%",
            zIndex: 0,
            pointerEvents: "none",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="container">
        <div className="header">
          <h2>
            My <span>Services</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>
      </div>

      <div className="cards">

        <div
          className={`card ${activeDot === 0 ? "active" : ""}`}
          onMouseEnter={() => setActiveDot(0)}
        >
          <h3>UI/UX Design</h3>
          <div className="divider"></div>

          <div className="image-stack">
            <Image
              src="/images/ser.png"
              alt="UI/UX Design"
              width={416}
              height={308}
              className="img-main"
            />
          </div>
        </div>

        <div
          className={`card ${activeDot === 1 ? "active" : ""}`}
          onMouseEnter={() => setActiveDot(1)}
        >
          <h3>Web Design</h3>
          <div className="divider"></div>

          <div className="image-stack">
            <Image
              src="/images/ser1.png"
              alt="Web Design"
              width={416}
              height={308}
              className="img-main move-down"
            />
          </div>
        </div>

        <div
          className={`card ${activeDot === 2 ? "active" : ""}`}
          onMouseEnter={() => setActiveDot(2)}
        >
          <h3>Landing Page</h3>
          <div className="divider"></div>

          <div className="image-stack">
            <Image
              src="/images/ser.png"
              alt="Landing Page"
              width={416}
              height={308}
              className="img-main"
            />
          </div>
        </div>

      </div>

      <div className="dots">
        <span className={activeDot === 0 ? "active" : ""}></span>
        <span className={activeDot === 1 ? "active" : ""}></span>
        <span className={activeDot === 2 ? "active" : ""}></span>
      </div>

    </section>
  );
}