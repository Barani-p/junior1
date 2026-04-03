"use client";

import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience" id="about">

      <div className="exp-container">
        <h2>
          My <span>Work Experience</span>
        </h2>

        <div className="timeline">

          <div className="left">
            <div className="item">
              <h4>Cognizant, Mumbai</h4>
              <p>Sep 2016 - July 2020</p>
            </div>

            <div className="item">
              <h4>Sugee Pvt limited, Mumbai</h4>
              <p>Sep 2020 - July 2023</p>
            </div>

            <div className="item">
              <h4>Cinetstox, Mumbai</h4>
              <p>Sep 2023</p>
            </div>
          </div>

          <div className="center-line">
            <span className="dot orange"></span>
            <span className="dot dark"></span>
            <span className="dot orange"></span>
          </div>

          <div className="right">
            <div className="item">
              <h4>Experience Designer</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>

            <div className="item">
              <h4>UI/UX Designer</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>

            <div className="item">
              <h4>Lead UX Designer</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="hire">

        <div className="hire-left">
          {/* <img
            src="/images/Bot1.png"
            className="Bot"
          /> */}

          <div className="img-box">
            <img
              src="/images/girl1.png"
              alt="Jenny UI UX designer professional profile photo"
              loading="lazy"
            />
          </div>
        </div>

        <div className="hire-right">
          <h2>
            Why <span>Hire me</span>?
          </h2>
    
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
          </p>

          <div className="stats">
            <div>
              <h3>450+</h3>
              <p>Project Completed</p>
            </div>

            <div className="stats-right">
              <h3>450+</h3>
              <p>Project Completed</p>
            </div>
          </div>

          <button className="stats_btn" type="button">
            Hire me
          </button>
        </div>

      </div>

    </section>
  );
}