"use client";

import "./Portfolio.css";
import Image from "next/image";
import smsImg from "../../../../public/images/sms.png";
import starImg from "../../../../public/images/star.png";
import awardImg from "../../../../public/images/award.png";
import shieldImg from "../../../../public/images/shield-tick.png";
import star3Img from "../../../../public/images/Star 3.png";

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
          <Image src={smsImg} alt="email contact icon" />
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
          <Image src={starImg} alt="4.9 out of 5 client rating" loading="lazy" />
          <p>4.9/5 Average Ratings</p>
        </div>

        <div className="icons">
          <Image src={awardImg} alt="award for product design excellence" loading="lazy" />
          <p>4.9/5 Average Ratings</p>
        </div>

        <div className="icons">
          <Image src={shieldImg} alt="trusted and secure service badge" loading="lazy" />
          <p>4.9/5 Average Ratings</p>
        </div>
      </div>

      <div className="cta-tags">
        <div className="marquee">
          <div className="marquee-content">

            <span>UX Design <Image src={star3Img} alt="" /></span>
            <span>App Design <Image src={star3Img} alt="" /></span>
            <span>Dashboard <Image src={star3Img} alt="" /></span>
            <span>Wireframe <Image src={star3Img} alt="" /></span>
            <span>User Research <Image src={star3Img} alt="" /></span>
            <span>UX Design <Image src={star3Img} alt="" /></span>
            <span>App Design <Image src={star3Img} alt="" /></span>
            <span>Dashboard <Image src={star3Img} alt="" /></span>
            <span>Wireframe <Image src={star3Img} alt="" /></span>
            <span>User Research <Image src={star3Img} alt="" /></span>

          </div>
        </div>
      </div>
    </section>
  );
}