'use client'

import React, { Fragment } from 'react';
import MobileNav from '../mobile-nav'
import NavBar from '../nav-bar'

const PageLayout = (props) => (
    <Fragment>
        <MobileNav />
        <NavBar />
        <section>{props.children}</section>
    </Fragment>
)

export default PageLayout
