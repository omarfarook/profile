import React, { Fragment } from 'react';
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
        <styles.Content>
        <h2>Contact Me</h2>
        <p>I am available to be hired.I’m currently looking for new opportunity. Fill up the form below or send an email to <a href={'mailto:' + MAIL_ID}>md.omarfarook.v.m@gmail.com</a>  and ~let's talk.</p>
        </styles.Content>
            <Mailer />
    </styles.Contact_Container>
)

export default ContactMe