import React from 'react'
import './Education.css'
export default function Education() {
    return (
        <section class="edu" id="edu">
        <div class="max-width">
            <h2 class="title">My Education</h2>
            <div class="serv-content">
                <div class="card">
                    <div class="box">
                        <div class="text"><h2>Bachelor of Technology</h2></div>
                        <h3>GLA University Mathura.</h3>
                        <p>Computer Science Engineering |
                        2018-2022
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <div class="text"><h1>Intermediate</h1></div>
                        <h3>Shri J.N. Shah Memorial Public Inter College</h3>
                        <p>ISC | 2017 | 88% </p>
                    </div>
                </div><div class="card">
                    <div class="box">
                        <div class="text"><h2>High School</h2></div>
                        <h3>Shri J.N. Shah Memorial Public Inter College</h3>
                        <p>ICSE | 2015 | 88%                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
