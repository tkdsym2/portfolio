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
    <div>
      <Works />
    </div>
  )
}

// const Home = withMediaComponent(MobileHome, TabletHome, DesktopHome)
export default DesktopHome