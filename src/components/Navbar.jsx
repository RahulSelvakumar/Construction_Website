import React from 'react';
import './styles/Navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from '../images/Logo.jpg';

const Navbar = () => {
    const scrollToAbout = () => {
      scroll.scrollTo('#about');
    };

    const scrollToMessage = () => {
      scroll.scrollTo('#message');
    };

    const scrollToWhyUs = () => {
      scroll.scrollTo('#why-us');
    };
    const scrollToServices = () => {
      scroll.scrollTo('#services');
    };
    const scrollToStrength = () => {
      scroll.scrollTo('#strength');
    };
    const scrollToTeam = () => {
      scroll.scrollTo('#team');
    };

    const scrollToProjects = () => {
      scroll.scrollTo('#projects');
    };
    const scrollToContact= () => {
      scroll.scrollTo('#contact');
    };

  return (
    <nav className="navbar">

      <a href="/" className="company-logo">
      <img src={Logo} alt="Company Logo" className="company-logo"/>
      </a>

      <ul className="navbar-nav">
      <li className="nav-item">
          <Link
            to="about"
            className="nav-link"
            smooth={true}
            onClick={scrollToAbout}
          >
          About
          </Link>
        </li>
        <li className="nav-item">
        <Link
            to="message"
            className="nav-link"
            smooth={true}
            onClick={scrollToMessage}
          >
          Message
          </Link>
        </li>
        <li className="nav-item">
        <Link
            to="why-us"
            className="nav-link"
            smooth={true}
            onClick={scrollToWhyUs}
          >
          Why Us?
          </Link>
        </li>
        <li className="nav-item">
        <Link
            to="services"
            className="nav-link"
            smooth={true}
            onClick={scrollToServices}
          >
         Services
          </Link>
        </li>
        <li className="nav-item">
        <Link
            to="strength"
            className="nav-link"
            smooth={true}
            onClick={scrollToStrength}
          >
          Strength
          </Link>
        </li>
        <li className="nav-item">
        <Link
            to="team"
            className="nav-link"
            smooth={true}
            onClick={scrollToTeam}
          >
          Team
          </Link>
        </li>
        <li className="nav-item">
        <Link
            to="projects"
            className="nav-link"
            smooth={true}
            onClick={scrollToProjects}
          >
          Projects
          </Link>
        </li>
        <li className="nav-item">
        <Link
            to="contact"
            className="nav-link"
            smooth={true}
            onClick={scrollToContact}
          >
          Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
