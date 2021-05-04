import React from 'react'
import './About.css'
import ups from './images/ups.jpg';
export default function About() {
    return (
        <div className="about" id='about-me' >
        <div className="max-width">
            <h2 className="title">About Me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={ups} alt="img"/>
                </div>
                <div className="column right">
                    <div className="text">I'm Umesh Pratap Singh and <span> I'm a   FullStack Developer,   Design-Thinker,Java and python Programmer</span></div>
                    <br/>
                    <p>Experienced Lead with a demonstrated history of working in the e-learning industry. Skilled in Academies, Web Development, English, Design Thinking and Campus. Strong professional with a Bachelor of Technology - BTech focused in Computer Science from GLA University.</p>
                    <a href="https://drive.google.com/file/d/1GIlpOt2Df804GNDK1iUnyftz-5baa5wH/view?usp=sharing" target="_blank">Resume</a>
                </div>
            </div>
        </div>
        </div>
    )
}
