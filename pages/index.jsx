import React from 'react';
import Head from 'next/head'

import Works from '../components/Works';

const Home = () => {
  return (
    <div>
      <Head>
        <title>tkd.work | Works</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon"/>
      </Head>
      <Works />
    </div>
  )
}

export default Home