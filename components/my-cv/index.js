'use client'

import React from 'react'
import * as styles from './style'
import {
    MAIL_ID,
    PHONE_NO,
    LINKEDIN_URL,
    LINKEDIN_NAME,
    NAME,
    ROLE
} from '../../constant'
import { trackContactLinkClick, trackExternalLinkClick, trackResumeDownload } from '../../lib/gtm'

const AWS_CERT_URL = 'https://www.credly.com/badges/d9463756-5657-4d17-8605-e05ce06a50a3?source=linked_in_profile'

const highlights = [
    '10+ years building enterprise applications across banking, energy, and e-commerce.',
    'Frontend architecture across React, Next.js, TypeScript, GraphQL, Angular, and micro-frontend platforms.',
    'Reusable UI foundations for tables, filters, search, pagination, forms, and enterprise workflows.',
    'Testing and quality practices with Playwright, TDD, code review, and CI/CD workflows.',
    'Technical leadership through RFCs, guild sessions, mentoring, and cross-functional delivery.'
]

const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'GraphQL',
    'Redux Toolkit',
    'RTK Query',
    'MUI',
    'Formik',
    'Angular',
    'Micro-frontends',
    'Playwright',
    'Keycloak',
    'OAuth2',
    'RBAC',
    'SAP Commerce',
    'SSR'
]

const experience = [
    {
        role: 'Senior Software Engineer',
        company: 'Flo Energy',
        location: 'Singapore',
        period: 'Feb 2025 - Present',
        summary: 'Delivered customer-facing capabilities across Energy Trading and Risk Management and BusinessPro platforms.',
        bullets: [
            'Implemented Keycloak authentication and RBAC across enterprise workflows.',
            'Restored reliable Playwright E2E testing in CI after repository migration.',
            'Authored frontend architecture RFCs and shared testing practices through internal guild sessions.'
        ]
    },
    {
        role: 'Senior Software Engineer',
        company: 'HCL Technologies, Client: Julius Baer',
        location: 'Singapore',
        period: 'Mar 2022 - Feb 2025',
        summary: 'Modernized enterprise banking workflows by migrating legacy Appway experiences to React.',
        bullets: [
            'Built reusable UI components for tables, filtering, global search, sorting, pagination, and forms.',
            'Established React, MUI, TypeScript, Redux Toolkit, RTK Query, Formik, and TDD foundations.',
            'Mentored junior engineers and reviewed code with a focus on maintainability and testability.'
        ]
    },
    {
        role: 'Senior Developer',
        company: 'Apar Technologies, Client: DBS Bank',
        location: 'Singapore',
        period: 'Nov 2020 - Mar 2022',
        summary: 'Developed reusable Angular widgets and micro-frontend capabilities for banking platforms.',
        bullets: [
            'Designed a reusable widget framework for shared customer-management capabilities.',
            'Built a configurable drag-and-drop form builder for dynamic business forms.',
            'Led UI implementation across frontend developers and collaborated with product leads.'
        ]
    },
    {
        role: 'Senior Developer',
        company: 'Aspire Digital Technologies',
        location: 'Tamil Nadu, India',
        period: 'Mar 2020 - Oct 2020',
        summary: 'Led frontend development for B2B commerce platforms using Angular and SAP Commerce.',
        bullets: [
            'Customized Angular Spartacus storefronts on SAP Commerce Hybris.',
            'Implemented SSR and State Transfer to improve performance and SEO.',
            'Worked with design and project teams to deliver business requirements on schedule.'
        ]
    },
    {
        role: 'IT Analyst / System Engineer',
        company: 'Tata Consultancy Services',
        location: 'Chennai, India',
        period: 'Aug 2015 - Mar 2020',
        summary: 'Built enterprise e-commerce applications for global clients across implementation, releases, and production support.',
        bullets: [
            'Developed responsive, cross-browser compatible web applications.',
            'Improved frontend performance with asynchronous CMS content rendering.',
            'Completed a one-year onsite assignment in Australia with client stakeholders and senior management.'
        ]
    }
]

const downloadCv = () => {
    trackResumeDownload({
        section: 'my_cv'
    })
    window.open('/Resume-mvm.pdf', '_blank')
}

export default () => (
    <styles.Cv_Content>
        <styles.ResumeHeader>
            <styles.Kicker>Resume</styles.Kicker>
            <h1>{NAME}</h1>
            <h2>{ROLE} focused on frontend architecture and enterprise applications</h2>
            <p>Senior Software Engineer with 10+ years of experience building scalable frontend platforms across banking, energy, and e-commerce.</p>
            <styles.ActionRow>
                <button onClick={downloadCv}>Download PDF</button>
                <a href={'mailto:' + MAIL_ID} onClick={() => trackContactLinkClick({ section: 'my_cv', method: 'email', url: `mailto:${MAIL_ID}` })}>Email</a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'my_cv', platform: 'linkedin', url: LINKEDIN_URL })}>{LINKEDIN_NAME}</a>
            </styles.ActionRow>
        </styles.ResumeHeader>

        <styles.ResumeGrid>
            <styles.SidePanel>
                <styles.Section>
                    <h2>Contact</h2>
                    <styles.ContactList>
                        <li><span>Email</span><a href={'mailto:' + MAIL_ID} onClick={() => trackContactLinkClick({ section: 'my_cv', method: 'email', url: `mailto:${MAIL_ID}` })}>{MAIL_ID}</a></li>
                        <li><span>Phone</span><a href={'tel:' + PHONE_NO} onClick={() => trackContactLinkClick({ section: 'my_cv', method: 'phone', url: `tel:${PHONE_NO}` })}>{PHONE_NO}</a></li>
                        <li><span>LinkedIn</span><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'my_cv', platform: 'linkedin', url: LINKEDIN_URL })}>{LINKEDIN_NAME}</a></li>
                    </styles.ContactList>
                </styles.Section>

                <styles.Section>
                    <h2>Skills</h2>
                    <styles.SkillList>
                        {skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </styles.SkillList>
                </styles.Section>

                <styles.Section>
                    <h2>Certification</h2>
                    <p>AWS Certified Developer - Associate</p>
                    <a href={AWS_CERT_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'my_cv', platform: 'credly', url: AWS_CERT_URL })}>Verify credential</a>
                </styles.Section>

                <styles.Section>
                    <h2>Education</h2>
                    <p>Bachelor's Degree in Computer Science and Engineering</p>
                    <p>Anna University, Chennai</p>
                </styles.Section>
            </styles.SidePanel>

            <main>
                <styles.Section>
                    <h2>Selected Impact</h2>
                    <styles.HighlightList>
                        {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </styles.HighlightList>
                </styles.Section>

                <styles.Section>
                    <h2>Experience</h2>
                    <styles.ExperienceList>
                        {experience.map((item) => (
                            <styles.ExperienceCard key={`${item.company}-${item.period}`}>
                                <styles.ExperienceHeader>
                                    <div>
                                        <h3>{item.role}</h3>
                                        <strong>{item.company}</strong>
                                    </div>
                                    <span>{item.period}</span>
                                </styles.ExperienceHeader>
                                <styles.Location>{item.location}</styles.Location>
                                <p>{item.summary}</p>
                                <ul>
                                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                </ul>
                            </styles.ExperienceCard>
                        ))}
                    </styles.ExperienceList>
                </styles.Section>
            </main>
        </styles.ResumeGrid>
    </styles.Cv_Content>
)
