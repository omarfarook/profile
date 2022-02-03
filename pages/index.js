import React, {Fragment} from 'react';
import Head from 'next/head';
import Layout from '../components/layout'
import Homes from '../components/home'
import Progress from '../components/progress-bar'
import styled from '@emotion/styled'

export default () => (
  <Fragment>
    <Head>
      <title>omarfarook.com | Mohamed Omar Farook | Profile</title>
      <meta name="description" content='My Profile' />
      <link rel="icon" type="image/png" href='' sizes="32x32" />
      <link rel="icon" type="image/png" href='' sizes="16x16" />
    </Head>
    <div className="fixed-bg">
    <div className='home'><Layout><Homes /></Layout></div>
    </div>
  </Fragment>
)
