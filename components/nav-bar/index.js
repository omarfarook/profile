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

export default () => {
    const path = usePathname()

    return (<styles.navContainer>
        <styles.pro_pic>
            <Link href="/"><img src="/dp2.jpg" alt="dp" /></Link>
        </styles.pro_pic>
        <styles.name_role>
            <styles.name>{NAME}</styles.name>
            <styles.role>{ROLE}</styles.role>
        </styles.name_role>
        <styles.links>
            <li><Link href="/aboutme" className={path == "/aboutme" ? "active" : ""}>About Me <span><IoIosArrowForward size={15} /></span></Link></li>
            <li><Link href="/mycv" className={path == "/mycv" ? "active" : ""}>my CV<span><IoIosArrowForward size={15} /></span></Link></li>
            <li><Link href="/contactme" className={path == "/contactme" ? "active" : ""}>Contact Me<span><IoIosArrowForward size={15} /></span></Link></li>
        </styles.links>
        <styles.download_link onClick={() => window.open("/Resume-mvm.pdf", "_blank")}>Download My CV</styles.download_link>
        <styles.get_in_touch>
            <span>GET IN TOUCH</span>
            <ul>
                <li><a href={'mailto:' + MAIL_ID}><IoIosMail size={20} /></a></li>
                <li><a href={'tel:' + PHONE_NO}><MdPhoneIphone size={20} /></a></li>
                <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a></li>
                <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a></li>
            </ul>

        </styles.get_in_touch>
    </styles.navContainer>)
}
