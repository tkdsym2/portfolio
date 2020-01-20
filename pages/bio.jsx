import React from 'react';
import Head from 'next/head'

import Profile from '../components/bio/desktop/Profile';

const Bio = () => (
  <div>
    <Head>
      <title>tkd.work | Bio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon"/>
    </Head>
    <Profile />
  </div>
)

export default Bio;