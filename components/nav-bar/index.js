import React, {Component} from 'react';
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneIphone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import * as styles from './style'
import MobileNav from '../mobile-nav';
 

 class NavBar extends Component {
    handleClick = e => {
        e.preventDefault()
        router.push(href)
      }

    render() {
        return (
            <styles.navContainer>
                <styles.pro_pic>
                   <img src="../../static/1373.jpg" alt="dp" />
                   </styles.pro_pic>
                   <styles.name_role>
                    <styles.name>Mohamed Omar Farook</styles.name>
                    <styles.role>Front End Developer</styles.role>
                </styles.name_role>
                <ul>
                    <li><Link href='/' as="/"><a>Home <span><IoIosArrowForward size={15} /></span></a></Link></li>
                    <li><Link href='/mycv' as="/mycv"><a>myCV<span><IoIosArrowForward size={15} /></span></a></Link></li>
                    <li><Link href='/contactme' as="contactme"><a>ContactMe<span><IoIosArrowForward size={15} /></span></a></Link></li>
                </ul>
                <styles.get_in_touch>
                    <span>GET IN TOUCH</span>
                    <ul>
                        <li><a href="mailto:mohamedomarfarookvm@gmail.com"><IoIosMail size={20} /></a></li>
                        <li><a href="tel:+91 7824001944"><MdPhoneIphone size={20} /></a></li>
                        <li><a href="https://www.linkedin.com/in/mohamed-omar-farook-v-m-46070473/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a></li>
                        <li><a href="https://github.com/omarfarook" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a></li>
                    </ul>
                </styles.get_in_touch>
            </styles.navContainer>
        )
    }
}

export default NavBar
