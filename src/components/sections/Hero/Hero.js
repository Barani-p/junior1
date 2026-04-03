"use client";

import "./Hero.css";
import ThreeScene from "./ThreeScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useEffect } from "react";
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
  const proxy = useRef({ y: 0, x: 0 });
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
    });
    
    lenis.on('scroll', ScrollTrigger.update);
    
    function raf(time) {
      lenis.raf(time * 1000);
    }
    
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 2.3,
        },
      })
  .to(sceneRef.current, {
        ease: "none",
        x: "-60vw",
        y: "100vh",
      }, "step1")

      .to(proxy.current, {
        ease: "none",
        y: Math.PI * 1,
        x: 0.3,
        onUpdate: () => {
          if (modelRef.current) {
            modelRef.current.rotation.y = proxy.current.y;
            modelRef.current.rotation.x = proxy.current.x;
          }
        }
      }, "step1")
      
      .to(sceneRef.current, {
        ease: "none",
        x: "40vh",
        y: "200vh",
      }, "step2")
      .to(proxy.current, {
        ease: "none",
        y: Math.PI * 3,
        x: -0.2,
        onUpdate: () => {
          if (modelRef.current) {
            modelRef.current.rotation.y = proxy.current.y;
            modelRef.current.rotation.x = proxy.current.x;
          }
        }
      }, "step2")

      .to(sceneRef.current, {
        ease: "none",
        x: "-85vh",
        y: "265vh",
      }, "step3")
      .to(proxy.current, {
        ease: "none",
        y: Math.PI * 0,
        x: 0.1,
        onUpdate: () => {
          if (modelRef.current) {
            modelRef.current.rotation.y = proxy.current.y;
            modelRef.current.rotation.x = proxy.current.x;
          }
        }
      }, "step3");
    });
    return () => {
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <section className="hero" id="home" ref={mainRef}>
      
      <div className="hero-badge">Hello!</div>
    <h1 className="hero-description">
   I design user-friendly digital products, websites, and mobile apps with a focus on modern UI/UX and performance.
  </h1>

      <img
       src="/images/Vector1.png"
        className="vector-img" 
        alt="decorative background shape"
         loading="lazy"
          />
      <div className="hero-line"></div>

      <h1 className="hero-title">
        I’m <span>Jenny</span>, <br />
        Product Designer
      </h1>
 
      <img src="/images/Vector2.png" className="vector2-img" alt="decorative background shape"  loading="lazy"/>

      <div className="hero-left-box">
        <img src="/images/quote-up.svg" alt="quote icon" loading="lazy" />
        <p>
          Jenny’s Exceptional product design <br />
          ensure our website’s success. <br />
          Highly Recommended
        </p>
      </div>

      <div className="hero-right-box">
        <div className="stars">
          <img src="/images/Star.svg" alt="5 star rating" loading="lazy"  />
          <img src="/images/Star.svg" alt="5 star rating" loading="lazy" />
          <img src="/images/Star.svg" alt="5 star rating" loading="lazy" />
          <img src="/images/Star.svg" alt="5 star rating" loading="lazy" />
          <img src="/images/Star.svg" alt="5 star rating" loading="lazy" />
        </div>

        <h2>10 Years</h2>
        <p>Experience</p>
      </div>

      <div className="robot-wrapper" ref={sceneRef}>
        <div className="robot-img">
          <ThreeScene ref={modelRef} className="Model" />
        </div>
      </div>
   

      <div className="hero-image">
        <img src="/images/girl.png" alt="Jenny product designer profile" loading="lazy"/>
        <div className="bg-shape"></div>
      </div>

      <div className="hero-buttons">
        <a href="#portfolio" className="btn btn-portfolio">
          <span>Portfolio</span>
          <span className="btn-arrow">↗</span>
        </a>

        <a href="#contact" className="btn btn-hire">
          <span>Hire me</span>
          <span className="btn-arrow">↗</span>
        </a>
      </div>

    </section>
  );
}