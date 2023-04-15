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
        <styles.cv_body>
            <styles.cv_page>
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
                    <styles.cert href="https://www.credly.com/badges/d9463756-5657-4d17-8605-e05ce06a50a3?source=linked_in_profile" target="_blank"><img src="../../static/aws.png" alt="dp" />
                    </styles.cert>
                </styles.Personal_Info>
                <styles.Objective_Content>
                    <h1>Career Objective</h1>
                    <p>Innovative, creative and a proven team player with 7+ years of experience
                    in designing, developing and managing complex web and mobile
                    applications and programs for various clients. I hope to share my skills,
                        expertise and experience with your team and valuable clients.</p>
                </styles.Objective_Content>
                <styles.Strength_Container>
                    <h1>Strengths</h1>
                    <div>
                        <ul>
                            <li>Proficient in HTML5, CSS3, Javascript, JQuery, LESS, SASS,Bootstrap</li>
                            <li>Experience in using Front End Frameworks – Angular, Angular Material, MUI, React, React Native, VueJS, Redux, Redux toolkit, RTL Query, Nextjs.</li>
                            <li>Experience in Cross-Platform Mobile Development using React Native based mobile application</li>
                            <li>Proficient knowledge in AWS Cloud services.</li>
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
                    <div className="experience">
                        <div><span>Senior frontend engineer </span> | HCL Tech Financial Service, Singapore</div>
                        <styles.Duration>MAR 2022 -  Present</styles.Duration>
                        <div><span>Senior Developer</span> | Apar Technologies, Singapore (DBS, Singapore) </div>
                        <styles.Duration>NOV 2021 -  MAR 2022</styles.Duration>
                        <div><span>Technical Lead</span> | Aspire Digital Technologies, India </div>
                        <styles.Duration>MAR 2020 - OCT 2020</styles.Duration>
                        <div><span>IT Analyst</span> | TATA Consultancy Services, India </div>
                        <styles.Duration>AUG 2015 - MAR 2020</styles.Duration>
                        <p>Served as Technical Spoc at Onshore location Australia</p>
                        <styles.Duration>AUG 2019 - NOV 2019</styles.Duration>
                        <p>Following are accounts/client's projects that I have worked upon:</p>
                    </div>
                    </styles.Experience_Content>
                    <styles.Experience_Content>
                <div className="font-bold"><span>Senior frontend engineer</span> | Bank Julius Baer – Singapore</div>
                    <styles.Duration>MAR 2022 - Present</styles.Duration>
                    <div>
                        <ul>
                            <li>Have initiated the Project with Base Project setup includes, React, MUI, Typescript, Redux & RTK Query, Formik, and InteractionBased TDD Testing</li>
                                <li>Identified the Reusable widgets and Created the standard widgets such as Tables with Filters, Global Search, Sorting, Pagination</li>
                        </ul>
                    </div>
                    </styles.Experience_Content>
            </styles.cv_page>
            <styles.cv_page>
            <styles.Experience_Content>
                    <div>
                        <ul>
                            <li>Extended the Form fields such as Dropdown, Multi-select, Radio button, Checkbox, and Date-picker to work with Formik</li>
                            <li>Peer reviewed the code with the TDD and Clean code perspective. I have onboarded 2 Junior developers to the team and Mentored
them.</li>
                            <li>Have contributed to 60 percent of the code base of the Repository and Delivered critical application flow in an agreed timeline</li>
                            <li>Implemented global customization of material UI to the client's standard</li>
                        </ul>
                    </div>
                    </styles.Experience_Content>
                <styles.Experience_Content>
                <div className="font-bold"><span>Senior Developer</span> | DBS – Singapore</div>
                    <styles.Duration>NOV 2020 -  MAR 2022</styles.Duration>
                    <div>
                        <ul>
                            <li>Widget framework development based on micro-front end, that can ensure the
                                end-to end reusability of product based Angular components across the DBS IBG
                                platforms.</li>
                                <li>Handling the complexities and leading the efficient design of a single widget that
can consume different sources and be the single source of truth to the end user. </li>
                            <li>Driving the team of UI developers for developing the widgets based on Angular 8. </li>
                            <li>Segregating the widgets based on the platform and collaborating with the product
                                leads to ensure the re-usability of widgets across multiple products. </li>
                            <li>Established appropriate review procedures to ensure consistent and high quality
                                deliverables.</li>
                        </ul>
                    </div>
                    </styles.Experience_Content>
                <styles.Experience_Content>
                    <div className="font-bold"><span>Sr. Lead Frontend Developer</span> | Obeikan – Saudi Arabia</div>
                    <styles.Duration>MAR 2020 - OCT 2020</styles.Duration>
                    <div>
                        <ul>
                            <li>The paramount objective is to develop Business-to-Business E-Commerce application for Manufacturing Company. </li>
                            <li>Integrated layout architecture from SAP Commerce CMS in angular framework for home
and static pages.</li>
                        </ul>
                    </div>

                </styles.Experience_Content>
                <styles.Experience_Content>
                <ul>
                    <li>Executes full-stack website launches specializing in front-end features, browser manipulation, and cross-browser compatibility</li>
                    <li>Lead the projects with a team of backend engineers and QA from planning to website launch.</li>
                            <li>Oversees creation and maintenance of front-end standard documents</li>
                    </ul>
                <div className="font-bold"><span>Technical Lead</span> | Leading Australian Retailer</div>
                    <styles.Duration>Aug 2018 - MAR 2020</styles.Duration>
                    <div>
                        <ul>
                            <li>Designs, develops and relaunches responsive e-commerce sites of the client</li>
                            <li>Improved Site Performance by implementing asynchronous content rendering (CMS) by using custom reusable components in Reactjs.</li>
                            <li>Executes full-stack website launches specializing in front-end features, browser manipulation, and cross-browser compatibility</li>
                            <li>Managed multiple projects with a team of backend engineers and QA from planning to website launch.</li>
                            <li>Oversees creation and maintenance of front-end standard documents</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold"><span>Frontend Developer</span> | Leading US Retailer</div>
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
                </styles.Experience_Content>
            </styles.cv_page>
            <styles.cv_page>
                <styles.Experience_Content>
                    <div>
                        <div className="font-bold"><span>Frontend Developer</span> | Leading US Retailer</div>
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
                <h1>Certifications</h1>
                    <div>
                        <span>AWS Certified Developer - Associate</span>
                        <span>Issued Aug 2021 - Expiry Aug 2024
                        <a href="https://www.credly.com/badges/d9463756-5657-4d17-8605-e05ce06a50a3?source=linked_in_profile" target="_blank">Verify</a>
                        </span>
                     </div>
                </styles.Education_Content>
                <styles.Education_Content>
                    <h1>Education</h1>
                    <div>
                        <span>Bachelor’s Degree in Computer Science and Engineering (2011-15)</span>
                        <span>Anna University, Chennai, Tamil Nadu.</span>
                    </div>
                </styles.Education_Content>
            </styles.cv_page>
        </styles.cv_body>
    </styles.Cv_Content>
)
