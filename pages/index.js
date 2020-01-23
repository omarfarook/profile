import React, { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../components/layout'
import Homes from '../components/home'

class HomePage extends React.Component {

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
        <Layout><Homes /></Layout>
      </Fragment>
		);
	}
}

export default HomePage;
