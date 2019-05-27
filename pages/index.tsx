// import Link from 'next/link';
import * as React from 'react'
import Navigator from '../components/Navigator'
import { Test } from '../style/_';
import { NextComponentType } from 'next';

const IndexPage: NextComponentType = () => {
    return (
        <Navigator title="portfolio">
            <Test>hello hello</Test>
        </Navigator>
    )
}

export default IndexPage
