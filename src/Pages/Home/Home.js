import React from 'react';
import './Home.css';
import video1 from "./video 3.mp4";
import About from "./../About/About"
import Skill from "./../Skill/Skill"
import Project from '../Services/Project';
import Contact from '../Contact/Contact';
// import Navbar from './../../component/Navbar/Navbar';


const Home = () => {
    return (
        <>
            <div className="main-home-main">
                <div className="main-home">
                    <video className="video-home" src={video1} autoPlay="true" loop muted typeof="video/mp4"></video>

                    <div className="my-about">
                        <h1>
                            <span className="rubber-letter place">H</span>
                            <span className="rubber-letter place">i</span>
                            <span className="rubber-letter place">,</span>
                            <br />
                            <span className="rubber-letter place">I</span>
                            <span className="rubber-letter place">'</span>
                            <span className="rubber-letter place">m</span>
                            <span> </span>
                            <span className="rubber-letter place">R</span>
                            <span className="rubber-letter place">a</span>
                            <span className="rubber-letter place">j</span>
                            <span className="rubber-letter place">,</span>
                            <br />
                            <span className="rubber-letter place">W</span>
                            <span className="rubber-letter place">e</span>
                            <span className="rubber-letter place">b</span>
                            <span> </span>
                            <span className="rubber-letter place">D</span>
                            <span className="rubber-letter place">e</span>
                            <span className="rubber-letter place">v</span>
                            <span className="rubber-letter place">e</span>
                            <span className="rubber-letter place">l</span>
                            <span className="rubber-letter place">o</span>
                            <span className="rubber-letter place">p</span>
                            <span className="rubber-letter place">e</span>
                            <span className="rubber-letter place">r</span>
                        </h1>
                        <p className="gray-text">Front End Developer / Back End Developer</p>
                        <div className="scroll-down">
                            <p>scroll down</p>
                            <i class="fas fa-arrow-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <About />
            </div>
            <div className="skill">
                <Skill />
            </div>
            <div className="project">
                <Project />
            </div>
            <div className="contact">
                <Contact />
            </div>
        </>
    );
}

export default Home;