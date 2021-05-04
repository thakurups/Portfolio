import React from 'react';
// import { Link } from 'react-router-dom';
import './Banner.css'
import {Link} from 'react-scroll'
import About from './About';
export default function Banner() {
        
    return (
        <div className="home">
        <div class="max-width">
            <div class="home-content">
                <div className="text-1">Hello, My name is</div>
                <div className="text-2">Umesh Pratap Singh</div>
                <div className="text-3">And I'm a <span>
                    FullStack Developer,Java Programmer</span><br/>
                
                    <Link to="about-me" className="more" smooth={true}>More About me</Link>
                
                </div>
            </div>
        </div>
        </div>
    )
}
