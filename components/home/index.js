import React, {Component} from 'react';
import { FaLinkedin} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { IoIosMail } from 'react-icons/io'
import * as styles from './style'

export default () => (
            <styles.Body_Content>
                <styles.Home_Container>
                    <div>MOF</div>
                    <styles.Name>Mohamed Omar Farook</styles.Name >
                    <styles.Role>Front End Developer</styles.Role>
                    <styles.Home_Links>
                        <li><a href="https://www.linkedin.com/in/mohamed-omar-farook-v-m-46070473/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a></li>
                        <li><a href="mailto:mohamedomarfarookvm@gmail.com"><IoIosMail size={30} /></a></li>
                        <li><a href="tel:+91 7824001944"><MdPhoneIphone size={30} /></a></li>
                    </styles.Home_Links>
                </styles.Home_Container>
            </styles.Body_Content>
        )