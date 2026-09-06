'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import * as styles from './style'
import { trackMobileNavClose, trackMobileNavOpen, trackNavigationClick } from '../../lib/gtm'
import { NAME, ROLE } from '../../constant'

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/aboutme' },
    { label: 'Work', path: '/work' },
    { label: 'Blog', path: '/blog' },
    { label: 'CV', path: '/mycv' },
    { label: 'Contact', path: '/contactme' }
]

const MobileNav = () => {
    const [isNavOpened, setIsNavOpened] = useState(false)
    const node = useRef(null)
    const path = usePathname()

    const openNav = () => {
        trackMobileNavOpen()
        setIsNavOpened(true)
    }

    const closeNav = useCallback((reason = 'manual_close') => {
        if (isNavOpened) {
            trackMobileNavClose({
                reason
            })
        }
        setIsNavOpened(false)
    }, [isNavOpened])

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
    }, [closeNav])

    return (
        <section>
            <styles.MobileHeader>
                <styles.Hamburger className="hamburger" aria-label="Open navigation" onClick={openNav} type="button">&#9776;</styles.Hamburger>
                <styles.MobileBrand href="/" onClick={() => navigate('Home', '/')}>
                    <span>{NAME}</span>
                    <small>{ROLE}</small>
                </styles.MobileBrand>
            </styles.MobileHeader>
            {isNavOpened ? <styles.Overlay onClick={() => closeNav('outside_click')} /> : null}
            <styles.Sidenav ref={node} style={{ transform: isNavOpened ? 'translateX(0)' : 'translateX(-100%)' }}>
                <styles.DrawerHeader>
                    <div>
                        <span>{NAME}</span>
                        <small>{ROLE}</small>
                    </div>
                    <button aria-label="Close navigation" onClick={() => closeNav('close_button')} type="button">&times;</button>
                </styles.DrawerHeader>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link href={item.path} onClick={() => navigate(item.label, item.path)} className={(path === item.path || (item.path !== '/' && path.startsWith(`${item.path}/`))) ? 'active' : ''}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </styles.Sidenav>
        </section>
    )
}

export default MobileNav
