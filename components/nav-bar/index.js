'use client'

import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneIphone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import * as styles from './style'
import {
    MAIL_ID,
    PHONE_NO,
    GITHUB_URL,
    LINKEDIN_URL,
    NAME,
    ROLE
} from '../../constant'
import {
    trackContactLinkClick,
    trackExternalLinkClick,
    trackNavigationClick,
    trackResumeDownload
} from '../../lib/gtm'

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/aboutme' },
    { label: 'Work', path: '/work' },
    { label: 'CV', path: '/mycv' },
    { label: 'Contact', path: '/contactme' }
]

const NavBar = () => {
    const path = usePathname()

    const trackNavigation = (label, destination) => {
        trackNavigationClick({
            section: 'desktop_nav',
            item: label,
            path: destination
        })
    }

    const downloadCv = () => {
        trackResumeDownload({
            section: 'desktop_nav'
        })
        window.open("/resume.pdf", "_blank")
    }

    return (<styles.navContainer>
        <styles.Brand href="/" onClick={() => trackNavigation('Home', '/')}>
            <styles.name>{NAME}</styles.name>
            <styles.role>{ROLE}</styles.role>
        </styles.Brand>
        <styles.links>
            {navItems.map((item) => (
                <li key={item.path}>
                    <Link href={item.path} onClick={() => trackNavigation(item.label, item.path)} className={path == item.path ? "active" : ""}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </styles.links>
        <styles.download_link onClick={downloadCv}>Download CV</styles.download_link>
        <styles.get_in_touch>
            <span>Contact</span>
            <ul>
                <li><a href={'mailto:' + MAIL_ID} aria-label="Email" onClick={() => trackContactLinkClick({ section: 'desktop_nav', method: 'email', url: `mailto:${MAIL_ID}` })}><IoIosMail size={18} /></a></li>
                <li><a href={'tel:' + PHONE_NO} aria-label="Phone" onClick={() => trackContactLinkClick({ section: 'desktop_nav', method: 'phone', url: `tel:${PHONE_NO}` })}><MdPhoneIphone size={18} /></a></li>
                <li><a href={LINKEDIN_URL} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'desktop_nav', platform: 'linkedin', url: LINKEDIN_URL })}><FaLinkedin size={18} /></a></li>
                <li><a href={GITHUB_URL} aria-label="GitHub" target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'desktop_nav', platform: 'github', url: GITHUB_URL })}><FaGithub size={18} /></a></li>
            </ul>

        </styles.get_in_touch>
    </styles.navContainer>)
}

export default NavBar
