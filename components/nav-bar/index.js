'use client'

import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
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

export default () => {
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
        window.open("/Resume-mvm.pdf", "_blank")
    }

    return (<styles.navContainer>
        <styles.pro_pic>
            <Link href="/" onClick={() => trackNavigation('Profile photo', '/')}><img src="/dp2.jpg" alt="dp" /></Link>
        </styles.pro_pic>
        <styles.name_role>
            <styles.name>{NAME}</styles.name>
            <styles.role>{ROLE}</styles.role>
        </styles.name_role>
        <styles.links>
            <li><Link href="/aboutme" onClick={() => trackNavigation('About Me', '/aboutme')} className={path == "/aboutme" ? "active" : ""}>About Me <span><IoIosArrowForward size={15} /></span></Link></li>
            <li><Link href="/mycv" onClick={() => trackNavigation('my CV', '/mycv')} className={path == "/mycv" ? "active" : ""}>my CV<span><IoIosArrowForward size={15} /></span></Link></li>
            <li><Link href="/contactme" onClick={() => trackNavigation('Contact Me', '/contactme')} className={path == "/contactme" ? "active" : ""}>Contact Me<span><IoIosArrowForward size={15} /></span></Link></li>
        </styles.links>
        <styles.download_link onClick={downloadCv}>Download My CV</styles.download_link>
        <styles.get_in_touch>
            <span>GET IN TOUCH</span>
            <ul>
                <li><a href={'mailto:' + MAIL_ID} onClick={() => trackContactLinkClick({ section: 'desktop_nav', method: 'email', url: `mailto:${MAIL_ID}` })}><IoIosMail size={20} /></a></li>
                <li><a href={'tel:' + PHONE_NO} onClick={() => trackContactLinkClick({ section: 'desktop_nav', method: 'phone', url: `tel:${PHONE_NO}` })}><MdPhoneIphone size={20} /></a></li>
                <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'desktop_nav', platform: 'linkedin', url: LINKEDIN_URL })}><FaLinkedin size={20} /></a></li>
                <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ section: 'desktop_nav', platform: 'github', url: GITHUB_URL })}><FaGithub size={20} /></a></li>
            </ul>

        </styles.get_in_touch>
    </styles.navContainer>)
}
