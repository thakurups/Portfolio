import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faUser,faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <div className="contact" id="contact-me">
        <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">
                <div className="column-left">
                    <div className="text">Get in Touch</div>
                    <p></p>
                    <div className="icons">
                        <div className="row">
                            
                            <FontAwesomeIcon icon={faUser} className="icom"/>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Umesh Pratap Singh</div>
                            </div>
                        </div>
                        <div className="row">
                            
                        <FontAwesomeIcon icon={faMapMarkedAlt}  className="icom"/>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Raebareli , Uttar Pradesh , India - 229202</div>
                            </div>
                        </div>
                        <div className="row">
                            <FontAwesomeIcon icon={faEnvelope}  className="icom"/>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">upsthakur2000@gmail.com</div>
                                <div className="sub-title">umesh.singh_cs18@gla.ac.in</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message Me</div>
                    <form action="mailto:upsthakur2000@gmail.com" method="get" enctype="text/plain">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" name="name" required/>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" name="email" required/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" name="subject" required/>
                        </div>
                        <div className="field textarea">
                            <textarea placeholder="Describe Project ..." cols="30" rows="10" name="description" required></textarea>
                        </div>
                        <div className="button">
                          <button type="submit" name="sumbit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
