import React, { Fragment } from 'react';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneIphone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import * as styles from './style'
import Mailer from '../mailer'
import { 
    MAIL_ID,
    PHONE_NO,
    GITHUB_URL,
    LINKEDIN_URL,
    LINKEDIN_NAME,
    GITHUB_NAME
} from '../../constant'

const ContactMe = () => (
    <styles.Contact_Container>
        <h2>Contact Me</h2>
        <span>I am available to be hired.I’m currently looking for new projects from April 2020.</span>
        <span>Fill up the form below or send an email to <a href={'mailto:' + MAIL_ID}>md.omarfarook.v.m@gmail.com</a>  and ~let's talk.</span>
        <Mailer />
        <address>
            <styles.Links>
                <li><span>E-mail: </span><a href={'mailto:' + MAIL_ID}><span><IoIosMail size={20} /></span>{MAIL_ID}</a></li>
                <li><span>Phone: </span><a href={'tel:' + PHONE_NO}><span><MdPhoneIphone size={20} /></span>{PHONE_NO}</a></li>
                <li><span>LinkedIn: </span><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><span><FaLinkedin size={20} /></span>{LINKEDIN_NAME}</a></li>
                <li><span>Github:</span><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><span><FaGithub size={20} /></span>{GITHUB_NAME}</a></li>
            </styles.Links>
        </address>
    </styles.Contact_Container>
)

export default ContactMe