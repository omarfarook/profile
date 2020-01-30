import React, { Fragment } from 'react';
import Layout from '../components/layout'
import MyCv from '../components/my-cv'

import Head from 'next/head';

export default () => (
  <Fragment>
    <Head>
    <title>my-profile.omarfarook.now.sh | Mohamed Omar Farook | CV</title>
      <meta name="description" content='My Profile' />
      <link rel="icon" type="image/png" href='' sizes="32x32" />
      <link rel="icon" type="image/png" href='' sizes="16x16" />
    </Head>
    <Layout><MyCv /></Layout>
  </Fragment>
)