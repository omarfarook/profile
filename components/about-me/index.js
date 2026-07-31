'use client'

import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { MdPhoneIphone } from 'react-icons/md'
import * as styles from './style'
import {
    ABOUT_ME,
    CORE_EXPERTISE,
    MAIL_ID,
    PHONE_NO,
    GITHUB_URL,
    LINKEDIN_URL,
    LINKEDIN_NAME,
    GITHUB_NAME
} from '../../constant'
import { trackContactLinkClick, trackExternalLinkClick } from '../../lib/gtm'

const principles = [
    {
        title: 'Design for change',
        body: 'I prefer module boundaries, reusable UI patterns, and typed contracts that make future product changes easier to review and ship.'
    },
    {
        title: 'Make quality visible',
        body: 'I use testable components, Playwright flows, code reviews, and practical RFCs to reduce delivery risk before it reaches users.'
    },
    {
        title: 'Work across functions',
        body: 'I collaborate closely with product, design, backend, QA, and business stakeholders to keep frontend decisions tied to product outcomes.'
    }
]

const qualityPractices = [
    'Define reusable tables, filters, forms, and workflow components for repeated enterprise patterns.',
    'Use automated testing and CI feedback to protect critical user journeys.',
    'Review code with maintainability, accessibility, and product behavior in mind.',
    'Mentor engineers through pairing, technical reviews, and clear frontend standards.'
]

const AboutMe = () => (
    <styles.Body_Content>
        <styles.About_Container>
            <styles.Kicker>About</styles.Kicker>
            <h1>I build frontend systems for complex enterprise products.</h1>
            <styles.Intro>{ABOUT_ME}</styles.Intro>

            <styles.Section>
                <h2>What I do best</h2>
                <styles.ExpertiseList>
                    {CORE_EXPERTISE.map((item) => <li key={item}>{item}</li>)}
                </styles.ExpertiseList>
            </styles.Section>

            <styles.PrincipleGrid>
                {principles.map((item) => (
                    <styles.PrincipleCard key={item.title}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </styles.PrincipleCard>
                ))}
            </styles.PrincipleGrid>

            <styles.Section>
                <h2>How I raise frontend quality</h2>
                <styles.QualityList>
                    {qualityPractices.map((item) => <li key={item}>{item}</li>)}
                </styles.QualityList>
            </styles.Section>

            <styles.NextPanel>
                <h2>What I am looking for next</h2>
                <p>Senior frontend engineering roles where I can lead architecture, improve product delivery systems, mentor engineers, and build reliable React, Next.js, TypeScript, and GraphQL applications in product-focused teams.</p>
            </styles.NextPanel>

            <styles.Links>
                <a href={'mailto:' + MAIL_ID} onClick={() => trackContactLinkClick({ section: 'about_me', method: 'email', url: `mailto:${MAIL_ID}` })}><IoIosMail size={20} />{MAIL_ID}</a>
                <a href={'tel:' + PHONE_NO} onClick={() => trackContactLinkClick({ section: 'about_me', method: 'phone', url: `tel:${PHONE_NO}` })}><MdPhoneIphone size={20} />{PHONE_NO}</a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'about_me', platform: 'linkedin', url: LINKEDIN_URL })}><FaLinkedin size={20} />{LINKEDIN_NAME}</a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'about_me', platform: 'github', url: GITHUB_URL })}><FaGithub size={20} />{GITHUB_NAME}</a>
            </styles.Links>
        </styles.About_Container>
    </styles.Body_Content>
)

export default AboutMe
