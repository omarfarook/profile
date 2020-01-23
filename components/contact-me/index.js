import React, { Component } from 'react';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneIphone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import * as styles from './style'

const ContactMe = () => (
    <styles.Contact_Container>
        <h2>Contact Me</h2>
        <span>I am available to be hired.</span>
        <address>
            <styles.Links>
                <li><span>E-mail: </span><a href="mailto:mohamedomarfarookvm@gmail.com"><span><IoIosMail size={20} /></span>md.omarfarook.v.m@gmail.com</a></li>
                <li><span>Phone: </span><a href="tel:+91 7824001944"><span><MdPhoneIphone size={20} /></span>+91 7824001944</a></li>
                <li><span>LinkedIn: </span><a href="https://www.linkedin.com/in/mohamed-omar-farook-v-m-46070473/" target="_blank" rel="noopener noreferrer"><span><FaLinkedin size={20} /></span>omarfarook.linkedin</a></li>
                <li><span>Github:</span><a href="https://github.com/omarfarook" target="_blank" rel="noopener noreferrer"><span><FaGithub size={20} /></span>omarfarook.github</a></li>
            </styles.Links>
        </address>
    </styles.Contact_Container>
)

export default ContactMe