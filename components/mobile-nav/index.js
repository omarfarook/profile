import React, { Component } from 'react';
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import { GoFile } from 'react-icons/go';
import { MdPermContactCalendar } from 'react-icons/md';
import * as styles from './style'

class MobileNav extends Component {

    constructor() {
        super()
        this.state = {
            isNavOpened: false
        }
    }

    componentDidMount = () => document.addEventListener('mousedown', this.handleClick, false);

    componentWillUnmount = () => document.removeEventListener('click', this.handleClick, false);

    openNav = () => {
        document.getElementById("mySidenav").style.width = "75px";
        this.setState({
            isNavOpened: true
        })
    }

    handleClick = (e) => {
        if(this.node && this.node.contains(e.target)) {
            return
        }
        this.closeNav();
    }

    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        this.setState({
            isNavOpened: false
        })    }

    render() {
        return (
            <section>
                <styles.Sidenav id="mySidenav" ref={node => this.node = node}>
                    <button onClick={this.closeNav}>&times;</button>
                    <ul>
                        <li onClick={this.closeNav}><Link href='/' as={'/'}><a><FaHome size={30} /></a></Link></li>
                        <li onClick={this.closeNav}><Link href='/aboutme' as={'/aboutme'}><a><FiInfo size={30} /></a></Link></li>
                        <li onClick={this.closeNav}><Link href='/mycv' as={'/mycv'}><a><GoFile size={30} /></a></Link></li>
                        <li onClick={this.closeNav}><Link href='/contactme' as={'/contactme'}><a><MdPermContactCalendar size={30} /></a></Link></li>
                    </ul>
                </styles.Sidenav>
                {!this.state.isNavOpened && <styles.Hamburger onClick={this.openNav}>&#9776;</styles.Hamburger>}
            </section>
        )
    }
}

export default MobileNav

