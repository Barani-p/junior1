"use client";

import "./Portfolio.css";

export default function Blog() {
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
              alt="Design Unraveled"
              className="blog-1"
            />

            <div className="arrow">
              <img src="/images/up right.png" alt="arrow" />
            </div>
          </div>

          <div className="blog-content">
            <span className="tag">UI / UX Design</span>

            <div className="meta">
              <img src="images/dot.png" alt="" />
              Jayesh Patil
              <img src="images/dot.png" alt="" />
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
              alt="Sugee Project"
              className="blog-2"
            />

            <div className="arrow">
              <img src="/images/up right.png" alt="arrow" />
            </div>
          </div>

          <div className="blog-content">
            <span className="tag">App Design</span>

            <div className="meta">
              <img src="images/dot.png" alt="" />
              Jayesh Patil
              <img src="images/dot.png" alt="" />
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
              alt="Cinetrade Project"
              className="blog-2"
            />

            <div className="arrow">
              <img src="/images/up right.png" alt="arrow" />
            </div>
          </div>

          <div className="blog-content">
            <span className="tag">App Design</span>

            <div className="meta">
              <img src="images/dot.png" alt="" />
              Jayesh Patil
              <img src="images/dot.png" alt="" />
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