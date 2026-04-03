"use client";

import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer" id="contact">
      
      <div className="Footer-1">
        <h3>Lets Connect there</h3>

        <div className="footer-btn">
          <button type="button">Hire me</button>
          <img src="/images/up right.png" alt="arrow icon" />
        </div>
      </div>

      <div className="f-line"></div>

      <div className="footer-container">
        
        <div className="footer-left">
          <div className="logo">
            <div className="logo-circle">
              <img src="/images/Vector.png" alt="logo icon" />
            </div>
            <h2>JCREA</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet.
          </p>

          <div className="socials">
            <span><img src="/images/facebook.png" alt="facebook" loading="lazy" /></span>
            <span><img src="/images/youtube.png" alt="youtube" loading="lazy" /></span>
            <span><img src="/images/whatsapp.png" alt="whatsapp" loading="lazy" /></span>
            <span><img src="/images/instagram.png" alt="instagram" loading="lazy" /></span>
            <span><img src="/images/filled.png" alt="other" loading="lazy" /></span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Resume</li>
            <li>Project</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>+91 7738443636</li>
            <li>jaycrea36@gmail.com</li>
            <li>Portfolio-jcrea.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-news">Get the latest information</h4>

          <form
            className="newsletter"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email Address"
              required
            />
            <button type="submit">➤</button>
          </form>
        </div>
      </div>

      <div className="f-line"></div>

      <div className="footer-bottom">
        <p>Copyright © 2023 Jayesh. All Rights Reserved.</p>
        <p>User Terms & Conditions | Privacy Policy</p>
      </div>

    </footer>
  );
}