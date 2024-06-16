import React from 'react';
import './FirstSection.css';
import IsMobile from './IsMobile';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const FirstSection = () => {
    const isMobile = IsMobile();

    return (
        <header className="first-section">
            <div className="first-section-content">
                <h1>מיכאל שיפוצניק</h1>
                <p>קבלן קטן נזק גדול</p>
            </div>
            {isMobile ? (
                <div className="contact-button-container">
                    <button className="contact-button">
                        <Link to="/contact" className="contact-link">Contact Us</Link>
                    </button>
                </div>
            ) : (
                <div className="contact-component-container">
                    <Contact />
                </div>
            )}
        </header>
    );
};

export default FirstSection;
