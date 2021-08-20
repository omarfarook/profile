import React from 'react';
import * as styles from './style'
import { ABOUT_ME } from '../../constant'
import { IoIosMail } from 'react-icons/io';
import { MdPhoneIphone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { 
    MAIL_ID,
    PHONE_NO,
    GITHUB_URL,
    LINKEDIN_URL,
    LINKEDIN_NAME,
    GITHUB_NAME
} from '../../constant'

export default () => (
    <styles.Body_Content>
        <styles.Home_Container>
            <h1>About Me</h1>
            <p>{ABOUT_ME}</p>
            <styles.Links>
                <div>
                    <address><span>E-mail : </span><a href={'mailto:' + MAIL_ID}><span><IoIosMail size={20} /></span>{MAIL_ID}</a></address>
                    <address><span>Phone : </span><a href={'tel:' + PHONE_NO}><span><MdPhoneIphone size={20} /></span>{PHONE_NO}</a></address>
                </div>
                <div>
                    <address><span>LinkedIn : </span><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><span><FaLinkedin size={20} /></span>{LINKEDIN_NAME}</a></address>
                    <address><span>Github :</span><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><span><FaGithub size={20} /></span>{GITHUB_NAME}</a></address>
                </div>
            </styles.Links>
        </styles.Home_Container>
    </styles.Body_Content>
)