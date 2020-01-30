import React, { Component } from 'react';
import * as styles from './style'
import {
    MAIL_ID,
    PHONE_NO,
    LINKEDIN_URL,
    LINKEDIN_NAME,
    NAME,
    ROLE
} from '../../constant'

export default () => (
    <styles.Cv_Content>
                <styles.Personal_Info>
                    <div>
                        <h1>{NAME}</h1>
                        <h3>{ROLE}</h3>
                    </div>
                     <styles.Links>
                            <li>Email: <a href={'mailto:' + MAIL_ID}>{MAIL_ID}</a></li>
                            <li>Phone: <a href={'tel:' + PHONE_NO}>{PHONE_NO}</a></li>
                            <li>LinkedIn: <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">{LINKEDIN_NAME}</a></li>
                        </styles.Links>
                    
                </styles.Personal_Info>
                <styles.Objective_Content>
                    <h1>Career Objective</h1>
                    <p>Innovative, creative and a proven team player with 4+ years of experience
                        in designing, developing and managing complex web and mobile
                        applications and programs for various clients. I hope to share my skills,
                        expertise and experience with your team and valuable clients.</p>
                </styles.Objective_Content>
                <styles.Strength_Container>
                        <h1>Strengths</h1>
                    <div>
                        <ul>
                            <li>Proficient in HTML5, CSS3, Javascript, JQuery, LESS, SASS,Bootstrap</li>
                            <li>Experience in using Front End Frameworks – React Native,Reactjs, Angular, Redux, Nextjs.</li>
                            <li>Experience in Cross-Platform Mobile Development using React Native based mobile application</li>
                            <li>Keen understanding of responsive design principles</li>
                            <li>Experienced in using Functional, Unit testing methods and Code
                                Review to deliver high quality, fit for purpose software with
                                emphasis on testability and maintainability.</li>
                            <li>Strong experience of working in agile teams and using Continuous
                                Delivery to get quick feedback and improve constantly</li>
                            <li>Possess a knack of teamwork and comfortable working cross
                                functional</li>
                        </ul>
                    </div>
                </styles.Strength_Container>
                <styles.Experience_Content>
                    <h1>Work Experience</h1>
                    <div>
                        <div><span>Sr. Frontend Developer</span> | Tata Consultancy Services</div>
                        <styles.Duration>AUG 2015 - PRESENT</styles.Duration>
                        <p>IT Analyst at TCS</p>
                        <styles.Duration>AUG 2019 - NOV 2019</styles.Duration>
                        <p>Served as Technical Spoc at Onshore location Australia</p>
                        <p>Following are accounts/client's projects that I have worked upon:</p>
                    </div>
                    <div>
                        <div><span>Sr. Frontend Developer</span> | MYER</div>
                        <styles.Duration>Aug 2018 - Present</styles.Duration>
                        <div>
                            <ul>
                                <li>Designs, develops and relaunches responsive e-commerce sites of the client</li>
                                <li>Improved Site Performance by implementing asynchronous content rendering (CMS) by using custom reusable components in Reactjs.</li>
                                <li>Executes full-stack website launches specializing in front-end features, browser manipulation, and cross-browser compatibility</li>
                                <li>Managed multiple projects with a team of backend engineers and QA from planning to website launch.</li>
                                <li>Oversees creation and maintenance of front-end standard documents</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div><span>Frontend Developer</span> | BJ's</div>
                        <styles.Duration>Jul 2017 – Jul 2018</styles.Duration>
                        <div>
                            <ul>
                                <li>Design and Developed entire shopping path of Business to business application for the client.</li>
                                <li>Integrated layout architecture in angular framework for home and PDP page .</li>
                                <li>Implemented SSR and StateTransfer in application to support SEO     and to improve the performance of the application.</li>
                                <li>Integrated third party libraries like Certona , Criteo in our application   for Recommended products.</li>
                                <li>Interpreted and executed designs correctly as requested by clients</li>   
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div><span>Frontend Developer</span> | DSG</div>
                        <styles.Duration>Nov 2015 – Jun 2017</styles.Duration> 
                        <div>
                            <ul>
                                <li>Designs, develops and relaunches responsive B2C e-commerce sites of the client</li>
                                <li>Developed and implemented effective solutions that are integrated to company's information technology standards</li>
                                <li>Coordinated with team of UX designers to create new Web Content Management system</li>
                                <li>Actively participates and engages the Software Support team in  resolving production issues</li>
                                <li>Converted Photoshop layouts to web pages using HTML, CSS, Flex and bootstrap</li>
                                <li>Presented web-site mock-ups to clients to give them better visual of the end product and to ensure that all parameters were met.</li>
                                <li>Worked closely with the design team and project managers and ensured projects are delivered in a timely manner</li>   
                            </ul>
                        </div>
                    </div>
                </styles.Experience_Content>
                <styles.Education_Content>
                    <h1>Education</h1>
                    <div>
                        <span>Bachelor’s Degree in Computer Science and Engineering (2011-15)</span>
                        <span>Anna University, Chennai, Tamil Nadu.</span>
                    </div>
                </styles.Education_Content>
            </styles.Cv_Content>
)
