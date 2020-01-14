import React from 'react';

import withAppLayout from '../components/AppLayout';
import Profile from '../components/bio/desktop/Profile';

const Bio = () => (
  <Profile />
)

export default withAppLayout(Bio);