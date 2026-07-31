'use client'

import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { MdPhoneIphone } from 'react-icons/md'
import * as styles from './style'
import {
    MAIL_ID,
    PHONE_NO,
    GITHUB_URL,
    LINKEDIN_URL,
    LINKEDIN_NAME,
    GITHUB_NAME
} from '../../constant'
import { trackContactLinkClick, trackExternalLinkClick, trackResumeDownload } from '../../lib/gtm'

const contactLinks = [
    {
        label: 'Email',
        value: MAIL_ID,
        href: `mailto:${MAIL_ID}`,
        icon: <IoIosMail size={22} />,
        onClick: () => trackContactLinkClick({ section: 'contact_me', method: 'email', url: `mailto:${MAIL_ID}` })
    },
    {
        label: 'Phone',
        value: PHONE_NO,
        href: `tel:${PHONE_NO}`,
        icon: <MdPhoneIphone size={22} />,
        onClick: () => trackContactLinkClick({ section: 'contact_me', method: 'phone', url: `tel:${PHONE_NO}` })
    },
    {
        label: 'LinkedIn',
        value: LINKEDIN_NAME,
        href: LINKEDIN_URL,
        icon: <FaLinkedin size={22} />,
        external: true,
        onClick: () => trackExternalLinkClick({ section: 'contact_me', platform: 'linkedin', url: LINKEDIN_URL })
    },
    {
        label: 'GitHub',
        value: GITHUB_NAME,
        href: GITHUB_URL,
        icon: <FaGithub size={22} />,
        external: true,
        onClick: () => trackExternalLinkClick({ section: 'contact_me', platform: 'github', url: GITHUB_URL })
    }
]

const downloadCv = () => {
    trackResumeDownload({
        section: 'contact_me'
    })
    window.open('/resume.pdf', '_blank')
}

const ContactMe = () => (
    <styles.Contact_Container>
        <styles.Content>
            <styles.Kicker>Contact</styles.Kicker>
            <h1>Let’s talk about frontend architecture and enterprise product work.</h1>
            <p>The fastest way to reach me is email or LinkedIn. I am based in Singapore and open to senior frontend engineering conversations.</p>
            <styles.ActionRow>
                <a href={'mailto:' + MAIL_ID} onClick={() => trackContactLinkClick({ section: 'contact_me', method: 'email', url: `mailto:${MAIL_ID}` })}>Email me</a>
                <button onClick={downloadCv}>Download CV</button>
            </styles.ActionRow>
            <styles.ContactGrid>
                {contactLinks.map((item) => (
                    <styles.ContactCard
                        key={item.label}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        onClick={item.onClick}
                    >
                        <span>{item.icon}</span>
                        <div>
                            <strong>{item.label}</strong>
                            <p>{item.value}</p>
                        </div>
                    </styles.ContactCard>
                ))}
            </styles.ContactGrid>
        </styles.Content>
    </styles.Contact_Container>
)

export default ContactMe
