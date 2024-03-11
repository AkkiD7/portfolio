import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={isOpen ? 'navbar open' : 'navbar'}>
        <h3 className='nav-name'>akkid7.dev</h3>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'menu-icon__line open' : 'menu-icon__line'}></div>
          <div className={isOpen ? 'menu-icon__line open' : 'menu-icon__line'}></div>
          <div className={isOpen ? 'menu-icon__line open' : 'menu-icon__line'}></div>
        </div>
        <ul className={isOpen ? 'navbar__links open' : 'navbar__links'}>
        <li><a onClick={() => scrollToSection('hero-section')}>Home</a></li>
          <li><a onClick={()=>scrollToSection('hero-section')}>About</a></li>
          <li><a onClick={() => scrollToSection('experience-section')}>Experience</a></li>
          <li><a onClick={() => scrollToSection('projects-section')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact-section')}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}
