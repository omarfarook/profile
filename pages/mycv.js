import React, { Fragment } from 'react';
import Layout from '../components/layout'
import MyCv from '../components/my-cv'

import Head from 'next/head';


class MyCvs extends React.Component {

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
          <title>Omar Farook - Profile</title>
          <meta name="description" content='My Profile' />
          <link rel="icon" type="image/png" href='' sizes="32x32" />
          <link rel="icon" type="image/png" href='' sizes="16x16" />
        </Head>
        <Layout><MyCv /></Layout>
      </Fragment>
		);
	}
}

export default MyCvs;
