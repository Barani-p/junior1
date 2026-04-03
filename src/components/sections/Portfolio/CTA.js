"use client";

import "./Portfolio.css";

export default function CTA() {
  return (
    <section className="cta">
      <h1 className="cta-description">
  Let’s build modern, user-friendly websites and mobile apps that improve user experience and business growth.
</h1>
      <h2>
        Have an Awsome Project<br /> Idea?{" "}
        <span className="highlight">Let’s Discuss</span>
      </h2>

      <form
        className="cta-input"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="cta-bg">
          <img src="images/sms.png" alt="email contact icon" />
        </div>

        <input
          type="email"
          placeholder="Enter Email Address"
          required
        />

        <button className="btn" type="submit">
          Send
        </button>
      </form>

      <div className="cta-icon">
        <div className="icons">
          <img src="images/star.png" alt="4.9 out of 5 client rating" loading="lazy" />
          <p>4.9/5 Average Ratings</p>
        </div>

        <div className="icons">
          <img src="images/award.png" alt="award for product design excellence" loading="lazy" />
          <p>4.9/5 Average Ratings</p>
        </div>

        <div className="icons">
          <img src="images/shield-tick.png" alt="trusted and secure service badge" loading="lazy" />
          <p>4.9/5 Average Ratings</p>
        </div>
      </div>

      <div className="cta-tags">
        <div className="marquee">
          <div className="marquee-content">

            <span>UX Design <img src="images/star 3.png" alt="" /></span>
            <span>App Design <img src="images/star 3.png" alt="" /></span>
            <span>Dashboard <img src="images/star 3.png" alt="" /></span>
            <span>Wireframe <img src="images/star 3.png" alt="" /></span>
            <span>User Research <img src="images/star 3.png" alt="" /></span>

            {/* repeat for marquee effect */}
            <span>UX Design <img src="images/star 3.png" alt="" /></span>
            <span>App Design <img src="images/star 3.png" alt="" /></span>
            <span>Dashboard <img src="images/star 3.png" alt="" /></span>
            <span>Wireframe <img src="images/star 3.png" alt="" /></span>
            <span>User Research <img src="images/star 3.png" alt="" /></span>

          </div>
        </div>
      </div>
    </section>
  );
}