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
import resumeData from '../../constant/resume-data.json'
import { trackContactLinkClick, trackExternalLinkClick, trackResumeDownload } from '../../lib/gtm'

const downloadCv = () => {
    trackResumeDownload({
        section: 'my_cv'
    })
    window.open('/resume.pdf', '_blank')
}

const MyCv = () => (
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
                        {resumeData.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </styles.SkillList>
                </styles.Section>

                <styles.Section>
                    <h2>Certification</h2>
                    <p>AWS Certified Developer - Associate</p>
                    <a href={resumeData.awsCertUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'my_cv', platform: 'credly', url: resumeData.awsCertUrl })}>Verify credential</a>
                </styles.Section>

                <styles.Section>
                    <h2>Education</h2>
                    <p>Bachelor&apos;s Degree in Computer Science and Engineering</p>
                    <p>Anna University, Chennai</p>
                </styles.Section>
            </styles.SidePanel>

            <main>
                <styles.Section>
                    <h2>Selected Impact</h2>
                    <styles.HighlightList>
                        {resumeData.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </styles.HighlightList>
                </styles.Section>

                <styles.Section>
                    <h2>Experience</h2>
                    <styles.ExperienceList>
                        {resumeData.experience.map((item) => (
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

export default MyCv
