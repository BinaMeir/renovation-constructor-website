import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IsMobile from './IsMobile';
import Contact from './Contact';
import './Home.css';
import FirstSection from './FirstSection';



const Home = () => {
  const isMobile = IsMobile();

    return ( 
        <div className="home">
            <FirstSection />
            <div className="contactOptions">
                {isMobile ? (
                <button className="contact-button">
                  <Link to="/contact" className="contact-link">Contact Us</Link>
                </button>
              ) : (
                <Contact />
              )}
            </div>
        </div>

     );
}
 
export default Home;