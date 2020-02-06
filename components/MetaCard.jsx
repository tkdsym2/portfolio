import React from 'react'
import Head from 'next/head'

const MetaCard = ({ data }) => (
  <Head>
    <title>tkd.work | {data.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="twitter:card" content={data.title}/>
    <meta name="twitter:site" content={`https://tkd.work${data.url}`} />
    <meta property="og:url" content={`https://tkd.work${data.url}`}/>
    <meta property="og:title" content={data.title}/>
    <meta property="og:description" content={data.subtitle}/>
    <meta property="og:image" content={data.main} />
    <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon"/>
    <link href="https://fonts.googleapis.com/css?family=Lato|Poppins:500,700,900&display=swap" rel="stylesheet"></link>
  </Head>
)

export default MetaCard;