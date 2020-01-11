import React from 'react';

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
      <p>welcome</p>
    </div>
  )
}




const Home = withMediaComponent(MobileHome, TabletHome, DesktopHome)
export default withAppLayout(Home)