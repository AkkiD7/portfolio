import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Frontend Developer.", "Software Developer."],
      typeSpeed: 40,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleResumeDownload = (event) => {
    event.preventDefault();

    const resumeUrl = `${process.env.PUBLIC_URL}/Akshay_Dabhade_Resume.pdf`;
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "Akshay_Dabhade_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <section id="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            Hi, My name is <span className="inner-text">Akshay</span>
            <div>and I am a passionate</div>
            <span className="job-title" ref={el}></span>
            <div className="buttons">
              <button className="resume-button" onClick={handleResumeDownload}>
                Download Resume
              </button>
              <a href="https://github.com/AkkiD7" target="_blank">
                <img src="./icons8-github-50.png"></img>
              </a>
              <a href="https://linkedin.com/in/akkid7" target="_blank">
                <img src="./icons8-linkedin-50.png"></img>
              </a>
            </div>
            <div className="tech-stack">
              <span className="tech-stack-text">
                <strong>Tech Stack | </strong>
              </span>
              <img
                src="https://skillicons.dev/icons?i=java"
                alt="java-logo"
                className="tech-stack-img"
              />
              <img
                src="https://skillicons.dev/icons?i=js,react"
                alt=""
                className="tech-stack-img"
              />
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt=""
                className="tech-stack-img"
              />
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-right-pic"></div>
          </div>
        </div>
      </section>
    </>
  );
}
