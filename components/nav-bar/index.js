import React, {Component} from 'react';
import Link from 'next/link'
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

export default () => (
    <styles.navContainer>
        <styles.pro_pic>
           <img src="../../static/1373.jpg" alt="dp" />
           </styles.pro_pic>
           <styles.name_role>
                <styles.name>{NAME}</styles.name>
                <styles.role>{ROLE}</styles.role>
            </styles.name_role>
            <ul>
                <li><Link href='/' as="/"><a>Home <span><IoIosArrowForward size={15} /></span></a></Link></li>
                <li><Link href='/mycv' as="/mycv"><a>my CV<span><IoIosArrowForward size={15} /></span></a></Link></li>
                <li><Link href='/contactme' as="contactme"><a>Contact Me<span><IoIosArrowForward size={15} /></span></a></Link></li>
                <li> <a href="../../static/resume-mvm.pdf" download>Download Resume</a></li>
            </ul>
            <styles.get_in_touch>
                <span>GET IN TOUCH</span>
                <ul>
                    <li><a href={'mailto:' + MAIL_ID }><IoIosMail size={20} /></a></li>
                    <li><a href={'tel:'+ PHONE_NO}><MdPhoneIphone size={20} /></a></li>
                    <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a></li>
                    <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a></li>
                </ul>
               
            </styles.get_in_touch>
    </styles.navContainer>
)
