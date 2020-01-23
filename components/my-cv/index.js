import React, { Component } from 'react';
import * as styles from './style' 

const MyCv = () => (
    <styles.Cv_Content className="cv-content">
                <styles.Personal_Info className="personal-info">
                    <div>
                        <h1>Mohamed Omar Farook</h1>
                        <h3>Front End Developer</h3>
                    </div>
                     <styles.Links className="links">
                            <li>Email: <a href="mailto:mohamedomarfarookvm@gmail.com">mohamedomarfarookvm@gmail.com</a></li>
                            <li>Phone: <a href="tel:+91 7824001944">+91 7824001944</a></li>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/mohamed-omar-farook-v-m-46070473/" target="_blank" rel="noopener noreferrer">omarfarook.linkedin</a></li>
                        </styles.Links>
                    
                </styles.Personal_Info>
                <styles.Objective_Content className="title objective-content">
                    <h1>Career Objective</h1>
                    <p>Innovative, creative and a proven team player with 4+ years of experience
                        in designing, developing and managing complex web and mobile
                        applications and programs for various clients. I hope to share my skills,
                        expertise and experience with your team and valuable clients.</p>
                </styles.Objective_Content>
                <styles.Strength_Container className="title strength-content">
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
                <styles.Experience_Content className="title experience-content">
                    <h1>Work Experience</h1>
                    <div>
                        <div className="role"><span>Sr. Frontend Developer</span> | Tata Consultancy Services</div>
                        <styles.Duration className="duration">AUG 2015 - PRESENT</styles.Duration>
                        <p>IT Analyst at TCS and following are accounts/clients’ projects that I have worked upon:</p>
                    </div>
                    <div>
                        <div className="role"><span>Sr. Frontend Developer</span> | MYER</div>
                        <styles.Duration className="duration">Aug 2018 - Present</styles.Duration>
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
                        <div className="role"><span>Frontend Developer</span> | BJ's</div>
                        <styles.Duration className="duration">Jul 2017 – Jul 2018</styles.Duration>
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
                        <div className="role"><span>Frontend Developer</span> | DSG</div>
                        <styles.Duration className="duration">Nov 2015 – Jun 2017</styles.Duration> 
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
                <styles.Education_Content className="title education-content">
                    <h1>Education</h1>
                    <div>
                        <span>Bachelor’s Degree in Computer Science and Engineering (2011-15)</span>
                        <span>Anna University, Chennai, Tamil Nadu.</span>
                    </div>
                </styles.Education_Content>
            </styles.Cv_Content>
)

export default MyCv