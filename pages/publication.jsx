import React from 'react';

import withAppLayout from '../components/AppLayout';
import Publications from '../components/Publications';

import { DesktopFrame } from '../styles/pages/Index'

const Publication = () => (
    <Publications />
)

export default withAppLayout(Publication);