import React, { Fragment } from 'react';


import Head from 'next/head';

import Layout from '../components/layout'
import ContactMe from '../components/contact-me'

class AboutUsPage extends React.Component {

  static async getInitialProps() {
    return {};
  }

  constructor(props){
    super(props);
    
  }

	render() {
		return (
  <Fragment>
        <Head>
          <title>Medical Professional ~ Cosmic JS Next Js App</title>
          <meta name="description" content='' />
          <link rel="icon" type="image/png" href='' sizes="32x32" />
          <link rel="icon" type="image/png" href='' sizes="16x16" />
        </Head>
        <Layout><ContactMe /></Layout>
    </Fragment>
		);
	}
}

export default AboutUsPage;
