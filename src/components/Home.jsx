import React from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Message from './Message';
import WhyUs from "./WhyUs";
import Services from './Services';
import Strength from './Strength';
import Team from './Team';
import Projects from './Projects';
import Contact from './Contact';
const Home= () =>{
  return (
    <>
    <Navbar/>
    <div className="homepage">
        <div className="homepage-content">
          <h1>XYZ Constructions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend aliquam consectetur.</p>
          <p>Vestibulum dapibus ante urna, id efficitur lacus efficitur eget. Sed hendrerit tristique metus, ut dignissim.</p>
          <div className="button-group">
            <a href="/services" className="button">Services</a>
            <a href="/contact" className="button">Contact Me</a>
        </div>
        </div>
      </div>
      <About/>
      <Message/>
      <WhyUs/>
      <Services/>
      <Strength/>
      <Team/>
      <Projects/>
      <Contact />
  </>
  );
}
export default Home;
