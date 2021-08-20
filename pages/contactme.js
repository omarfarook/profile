import React, { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../components/layout'
import ContactMe from '../components/contact-me'
import Progress from '../components/progress-bar'

export default () => (
  <Fragment>
        <Head>
        <title>my-profile.omarfarook.now.sh | Mohamed Omar Farook | Contacts</title>
          <meta name="description" content='My Profile' />
          <link rel="icon" type="image/png" href='' sizes="32x32" />
          <link rel="icon" type="image/png" href='' sizes="16x16" />
        </Head>
        <Layout><ContactMe /></Layout>
    </Fragment>
		)
