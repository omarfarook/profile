import React, {Component} from 'react';
import { FaLinkedin} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { IoIosMail } from 'react-icons/io'
import * as styles from './style'
import { MAIL_ID, PHONE_NO, LINKEDIN_URL } from '../../constant'

export default () => (
            <styles.Body_Content>
                <styles.Home_Container>
                    <div>
                        <img src="../../static/dp2.jpg" alt="dp-pic"/>
                        <span>MOF</span>
                    </div>
                    <styles.Name>Mohamed Omar Farook</styles.Name >
                    <styles.Role>Front End Developer</styles.Role>
                    <styles.Home_Links>
                        <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a></li>
                        <li><a href={'mailto:' + MAIL_ID}><IoIosMail size={30} /></a></li>
                        <li><a href={'tel:' + PHONE_NO}><MdPhoneIphone size={30} /></a></li>
                    </styles.Home_Links>
                </styles.Home_Container>
            </styles.Body_Content>
        )