'use client'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import { GoFile } from 'react-icons/go';
import { MdPermContactCalendar } from 'react-icons/md';
import * as styles from './style'

const MobileNav = () => {
    const [isNavOpened, setIsNavOpened] = useState(false)
    const node = useRef(null)

    const closeNav = () => setIsNavOpened(false)

    useEffect(() => {
        const handleClick = (e) => {
            if (node.current && node.current.contains(e.target)) {
                return
            }
            closeNav()
        }

        document.addEventListener('mousedown', handleClick, false)
        return () => document.removeEventListener('mousedown', handleClick, false)
    }, [])

    return (
        <section>
            <styles.Sidenav ref={node} style={{ width: isNavOpened ? '75px' : '0' }}>
                <button onClick={closeNav}>&times;</button>
                <ul>
                    <li onClick={closeNav}><Link href="/"><FaHome size={30} /></Link></li>
                    <li onClick={closeNav}><Link href="/aboutme"><FiInfo size={30} /></Link></li>
                    <li onClick={closeNav}><Link href="/mycv"><GoFile size={30} /></Link></li>
                    <li onClick={closeNav}><Link href="/contactme"><MdPermContactCalendar size={30} /></Link></li>
                </ul>
            </styles.Sidenav>
            {!isNavOpened && <styles.Hamburger className="hamburger" onClick={() => setIsNavOpened(true)}>&#9776;</styles.Hamburger>}
        </section>
    )
}

export default MobileNav
