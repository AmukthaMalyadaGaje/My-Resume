import React from 'react'
import html from '../icons8-html-48.png'
import css from '../icons8-css-100.png'
import java from '../icons8-java-48.png'
import mysql from '../icons8-mysql-50.png'
import oops from '../unnamed.png'
import reactjs from '../reactjs.png'
import dsa from '../dsa.png'
import git from '../gitandgithub.png'
// import bgimg from '../bgimg.avif'
import '../App.css';
export default function About() {
    return (
        <div className='about'>
            <div className='content'>
                <div className='heading'>
                    <u>About</u>
                    <div className='description'>
                        I,Amuktha Malyada ,Web Designer and Programmer living in Karimnagar,Telangana,India.I am Pursuing my Bachelors Degree in Computer Science Enbgineering(AI & ML) from Jawaharlal Nehuru University,Hyderabd.
                        <br /><br />
                        I am a passionate front-end developer and programmer dedicated to creating intuitive and visually appealing digital experiences. With a blend of creative flair and technical expertise, I excel at turning design concepts into functional and user-friendly websites and applications.
                        <br /><br />
                        My skills encompass a wide range of programming languages, including HTML, CSS, and JavaScript. I am well-versed in various front-end frameworks and libraries such as React js, enabling me to craft responsive, cross-browser compatible, and mobile-first designs.
                        <br/>
                        In addition to my technical skills, I possess strong problem-solving abilities, adaptability, and a deep commitment to meeting project deadlines.
                        <br/>
                        My love for problem-solving drives me to continuously improve my coding skills, and I enjoy staying up-to-date with the latest web development trends and best practices.

                    </div>
                    <div className='signature'>
                        AmukthaMalyada Gaje
                    </div>
                </div>
            </div>
            <div className='line'></div>
            <div className='skills'>
                <u>Skills</u>
                <div className='skillbox'>
                    <div className='techskills'>
                        <div className='heading2'>Technical Skills</div>
                        <ul>
                            <div className='skillitems'>
                                <img src={html} alt="" width="40px" height="40px" />
                                <li>HTML</li>
                            </div>
                            <div className='skillitems'>
                                <img src={css} alt="" width="40px" height="40px" />
                                <li>CSS</li>
                            </div>
                            <div className='skillitems'>
                                <img src={java} alt="" width="40px" height="40px" />
                                <li>Java</li>
                            </div>
                            <div className='skillitems'>
                                <img src={oops} alt="" width="50px" height="40px" />
                                <li>OOPS</li>
                            </div>
                            <div className='skillitems'>
                                <img src={mysql} alt="" width="40px" height="40px" />
                                <li>MySql</li>
                            </div>
                            <div className='skillitems'>
                                <img src={reactjs} alt="" width="40px" height="40px" />
                                <li>React Js</li>
                            </div>
                            <div className='skillitems'>
                                <img src={dsa} alt="" width="40px" height="40px" />
                                <li>DSA(Advanced)</li>
                            </div>
                            <div className='skillitems'>
                                <img src={git} alt="" width="40px" height="40px" />
                                <li>Git &  Github</li>
                            </div>
                        </ul>
                    </div>
                    <div className='personalskills'>
                        <div className='heading2'>Personal Skills</div>
                        <ul>
                            <li>Competitive Programming</li>
                            <li>Logical Thinking</li>
                            <li>Strong Work Ethic</li>
                        </ul>
                    </div>
                    <div className='personalskills'>
                        <div className='heading2'>Languages Known</div>
                        <ul>
                            <li>Telugu</li>
                            <li>English</li>
                            <li>Hindi</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
