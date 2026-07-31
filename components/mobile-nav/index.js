'use client'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import { GoFile } from 'react-icons/go';
import { MdPermContactCalendar, MdWorkOutline } from 'react-icons/md';
import * as styles from './style'
import { trackMobileNavClose, trackMobileNavOpen, trackNavigationClick } from '../../lib/gtm'

const MobileNav = () => {
    const [isNavOpened, setIsNavOpened] = useState(false)
    const node = useRef(null)

    const openNav = () => {
        trackMobileNavOpen()
        setIsNavOpened(true)
    }

    const closeNav = (reason = 'manual_close') => {
        if (isNavOpened) {
            trackMobileNavClose({
                reason
            })
        }
        setIsNavOpened(false)
    }

    const navigate = (label, destination) => {
        trackNavigationClick({
            section: 'mobile_nav',
            item: label,
            path: destination
        })
        closeNav('navigation_click')
    }

    useEffect(() => {
        const handleClick = (e) => {
            if (node.current && node.current.contains(e.target)) {
                return
            }
            closeNav('outside_click')
        }

        document.addEventListener('mousedown', handleClick, false)
        return () => document.removeEventListener('mousedown', handleClick, false)
    }, [isNavOpened])

    return (
        <section>
            <styles.Sidenav ref={node} style={{ width: isNavOpened ? '75px' : '0' }}>
                <button onClick={() => closeNav('close_button')}>&times;</button>
                <ul>
                    <li><Link href="/" aria-label="Home" onClick={() => navigate('Home', '/')}><FaHome size={30} /></Link></li>
                    <li><Link href="/aboutme" aria-label="About Me" onClick={() => navigate('About Me', '/aboutme')}><FiInfo size={30} /></Link></li>
                    <li><Link href="/work" aria-label="Work" onClick={() => navigate('Work', '/work')}><MdWorkOutline size={30} /></Link></li>
                    <li><Link href="/mycv" aria-label="My CV" onClick={() => navigate('my CV', '/mycv')}><GoFile size={30} /></Link></li>
                    <li><Link href="/contactme" aria-label="Contact Me" onClick={() => navigate('Contact Me', '/contactme')}><MdPermContactCalendar size={30} /></Link></li>
                </ul>
            </styles.Sidenav>
            {!isNavOpened && <styles.Hamburger className="hamburger" onClick={openNav}>&#9776;</styles.Hamburger>}
        </section>
    )
}

export default MobileNav
