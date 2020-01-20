import React from 'react'
import Head from 'next/head'

const MetaCard = ({ data }) => (
  <Head>
    <title>tkd.work | {data.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="twitter:card" content={data.title}/>
    <meta name="twitter:site" content="tkd.work" />
    <meta property="og:url" content={"https://google.com/"}/>
    <meta property="og:title" content={data.title}/>
    <meta property="og:description" content="description"/>
    <meta property="og:image" content={data.main} />
  </Head>
)

export default MetaCard;