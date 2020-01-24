import React, { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../components/layout'
import ContactMe from '../components/contact-me'

export default () => (
  <Fragment>
        <Head>
        <title>Omar Farook - Profile</title>
          <meta name="description" content='My Profile' />
          <link rel="icon" type="image/png" href='' sizes="32x32" />
          <link rel="icon" type="image/png" href='' sizes="16x16" />
        </Head>
        <Layout><ContactMe /></Layout>
    </Fragment>
		)
