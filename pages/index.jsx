import React from 'react';

import Works from '../components/Works';
import { DesktopFrame } from '../styles/pages/Index';

import withAppLayout from '../components/AppLayout';
import withMediaComponent from '../components/MediaComponent';

const MobileHome = () => {
  return (
    <div>
      <p>Mobile</p>
    </div>
  )
}

const TabletHome = () => {
  return (
    <div>
      <p>tablet</p>
    </div>
  )
}

const DesktopHome = () => {
  return (
    <DesktopFrame>
      <Works />
    </DesktopFrame>
  )
}

const Home = withMediaComponent(MobileHome, TabletHome, DesktopHome)
export default withAppLayout(Home)