import React from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faGithub,faHackerrank} from '@fortawesome/free-brands-svg-icons'

export default function Skills() {
    return ( 
<section  className="skills" id="skills">
    <div  className="max-width">
        <h2  className="title">My Skills</h2>
        <div  className="skills-content">
            <div  className="column left">
                <div  className="text">My Creative Skills and Experiences.</div>
                <p>My interest is in  competitive programming, I prefer coding in Java ,python and C programming languages. I  also know MySQL , HTML, CSS, Javascript, MongoDB and React.JS. I learn New Skills to become more Creative.</p>
                <div className="icom">
                <a href="https://www.hackerrank.com/_181500767" target="_blank"><FontAwesomeIcon  className="i"icon={faHackerrank}/></a>
                <a href="https://github.com/thakurups" target="_blank"><FontAwesomeIcon  className="i"icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/umesh-pratap-singh-956348140/" target="_blank"><FontAwesomeIcon  className="i"icon={faLinkedinIn}/></a>
          
                </div>
            </div>
            <div  className="column right">
                
            <div  className="bars">
                    <div  className="info">
                        <span>JAVA</span>
                         
                    </div>
                    <div  className="line java"></div>
                </div>
                <div  className="bars">
                    <div  className="info">
                        <span>PYTHON</span>
                         
                    </div>
                    <div  className="line python"></div>
                    </div>
                <div  className="bars">
                    <div  className="info">
                        <span>C</span>
                         
                    </div>
                    <div  className="line C"></div>
                    </div>
                <div  className="bars">
                    <div  className="info">
                        <span>HTML</span>
                         
                    </div>
                    <div  className="line html"></div>
                </div>
                <div  className="bars">
                    <div  className="info">
                        <span>CSS</span>
                         
                    </div>
                    <div  className="line css"></div>
                </div>
                <div  className="bars">
                    <div  className="info">
                        <span>JAVASCRIPT</span>
                         
                    </div>
                    <div  className="line js"></div>
                </div>
                <div  className="bars">
                    <div  className="info">
                        <span>MongoDB</span>
                         
                    </div>
                    <div  className="line css"></div>
                </div>
                <div  className="bars">
                    <div  className="info">
                        <span>React.JS</span>
                         
                    </div>
                    <div  className="line css"></div>
                </div>
                </div>
            </div>
        </div>
    
</section>
    )
}
