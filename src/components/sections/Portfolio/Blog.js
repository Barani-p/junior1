"use client";

import "./Portfolio.css";


export default function Blog() {
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "UI UX Blog",
    }),
  }}
/>
  return (
    <section className="blog">
      <div className="blog-header">
        <h2 className="section-title">From my blog post</h2>
        <button type="button">See All</button>
      </div>

      <div className="blog-grid">

        <div className="blog-card">
          <div className="blog-img">
            <img
              src="/images/Rectangle6.png"
              alt="UI UX design process and case study - Design Unraveled"
              className="blog-1"
              loading="lazy"
            />

            <div className="arrow">
              <img src="/images/up right.png" alt="arrow" loading="lazy" />
            </div>
          </div>

          <div className="blog-content">
            <span className="tag">UI / UX Design</span>

            <div className="meta">
              <img src="images/dot.png" alt="" loading="lazy" />
              Jayesh Patil
              <img src="images/dot.png" alt="" loading="lazy" />
              10 Nov, 2023
            </div>

            <p>
              Design Unraveled: Behind the Scenes of UI/UX Magic
            </p>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-img">
            <img
              src="/images/blog2.png"
              alt="Loan management mobile app design for rural users UI UX case study"
              className="blog-2"
              loading="lazy"
            />

            <div className="arrow">
              <img src="/images/up right.png" alt="arrow" loading="lazy" />
            </div>
          </div>

          <div className="blog-content">
            <span className="tag">App Design</span>

            <div className="meta">
              <img src="images/dot.png" alt="" loading="lazy" />
              Jayesh Patil
              <img src="images/dot.png" alt="" loading="lazy" />
              09 Oct, 2023
            </div>

            <p>
              Sugee: Loan Management System for Rural Sector
            </p>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-img">
            <img
              src="/images/blog3.png"
              alt="Digital media investment app interface UI UX design project"
              className="blog-2"
              loading="lazy"
            />

            <div className="arrow">
              <img src="/images/up right.png" alt="arrow" loading="lazy" />
            </div>
          </div>

          <div className="blog-content">
            <span className="tag">App Design</span>

            <div className="meta">
              <img src="images/dot.png" alt=""  loading="lazy"/>
              Jayesh Patil
              <img src="images/dot.png" alt="" loading="lazy" />
              13 Aug, 2023
            </div>

            <p>
              Cinetrade: Innovative way to invest in Digital Media
            </p>
          </div>
        </div>

      </div>
    </section>
    
  );
}