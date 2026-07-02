'use client'

import React, { Fragment } from 'react';
import MobileNav from '../mobile-nav'
import NavBar from '../nav-bar'

export default (props) => (
    <Fragment>
        <MobileNav />
        <NavBar />
        <section>{props.children}</section>
    </Fragment>
)
