import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const greetings = [
    "Hello👋",
    "नमस्ते🙏",
    "नमस्कार🙏",
    "হয়नमस्ते🙏",
    "வணக்கம்🙏",
    "مرحبا🙏",
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timeoutIds = [];
    greetings.forEach((greeting, index) => {
      timeoutIds.push(
        setTimeout(() => {
          setCurrentGreetingIndex(index);
        }, index * 300) // Adjust delay here for desired speed (0.2 seconds per greeting)
      );
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (currentGreetingIndex === greetings.length - 1) {
      setTimeout(() => setShowGreeting(false), 1000);
    }
  }, [currentGreetingIndex]);

  return (
    <>
      <Navbar />
      {showGreeting && (
        <div className="greeting-container">
          <div className="greeting">
            {greetings[currentGreetingIndex]}
          </div>
        </div>
      )}
      {!showGreeting && (
        <div className="content">
          <Hero className={!showGreeting ? "hero--slide-down" : ""} /> {/* Conditionally add animation class */}
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
