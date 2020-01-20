import React from 'react';

import withMediaComponent from './MediaComponent';
import ResearchProjects from '../components/works/ResearchProjects';
import Exhibitions from '../components/works/Exhibitions';
import Others from '../components/works/Others';

import { DesktopFrame } from '../styles/works/works_desktop'

const MobileWorks = () => (
  <div>
    <p>Research Projects</p>
    <p>Exhibition</p>
    <p>Others</p>
  </div>
)

const TabletWorks = () => (
  <div>
    <p>Research Projects</p>
    <p>Exhibition</p>
    <p>Others</p>
  </div>
)

const DesktopWorks = () => (
  <DesktopFrame>
    <ResearchProjects />
    <Exhibitions />
    <Others />
  </DesktopFrame>
)

// const Works = withMediaComponent(MobileWorks, TabletWorks, DesktopWorks);
export default DesktopWorks