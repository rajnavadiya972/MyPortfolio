import React from 'react';
import './About.css';
import myPhoto from './raj.png';


const About = () => {
    return (
        <>
            <div className="main-about">
                <div className="about-head">
                    <h2>About Me</h2>
                </div>
                <div className="photo-about">
                    <div className="my-photo">
                        <div className="photo-in">
                            <img src={myPhoto} alt="PHOTO" />
                        </div>
                    </div>
                    <div className="my-info">
                        <span>
                            <ul><li>Hey, My name is Raj Navadiya.</li><li>I am studying B.Tech Information Technology in Dharmsinh Desai University (DDU),Nadiad.
                        </li><li>I have completed my higher education from Tapovan high School, Surat .
                            </li><li>I have 5★ problem solving skill in hackerrank as well as 2★ in codechef and have solved 150+ questions on Leetcode.
                            </li><li>I am a Web Enthusiast who also loves to do Competitive Programming.</li></ul></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;