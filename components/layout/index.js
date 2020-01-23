import React, { Fragment } from 'react';
import MobileNav from '../mobile-nav'
import NavBar from '../nav-bar'
import {GlobalStyle} from '../global-css'

export default (props) => (
    <Fragment>
        <GlobalStyle />
        <MobileNav />
        <NavBar />
        <section>{props.children}</section>
    </Fragment>
)
