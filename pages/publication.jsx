import React from 'react';
import Head from 'next/head'

import Publications from '../components/Publications';

const Publication = () => (
    <div>
    <Head>
        <title>tkd.work | Publications</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon"/>
      </Head>
      <Publications />
    </div>
    
)

export default Publication