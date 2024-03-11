import React from "react";

export default function Projects() {
  return (
    <section id="projects-section">
    <div className="projects-container">
      <div className="project-title">
        <h1>PROJECTS</h1>
        <h2 className="project-text-h2">Browse My Recent</h2>
      </div>

      <div className="projects-main-container">
        <div className="projects-content">
          <div className="project-img">
            <img src="./Odoo.png" alt="Project-Image" />
          </div>
          <div className="project-name">
            <h3>Automotive ERP (Material Management)</h3>
          </div>
          <div className="github-button"> 
          <a href="https://github.com/AkkiD7"><button>Github</button></a>
          </div>
        </div>
        <div className="projects-content">
          <div className="project-img">
            <img src="./event.jpg" alt="Project-Image" />
          </div>
          <div className="project-name">
            <h3>Event Planner (Web Based Application)</h3>
          </div>
          <div className="github-button">
          <a href="https://github.com/AkkiD7/Lan-Chat-Desktop-Application"><button>Github</button></a>
          </div>
        </div>
        <div className="projects-content">
          <div className="project-img">
            <img src="./lanchat.png" alt="Project-Image" />
          </div>
          <div className="project-name">
            <h3>ChitChat (Lan Chat Desktop Application)</h3>
          </div>
          <div className="github-button">
          <a href="https://github.com/AkkiD7/Lan-Chat-Desktop-Application"><button>Github</button></a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
