import React from 'react';
import { withRouter } from 'next/router';

import withAppLayout from '../components/AppLayout';

const Work = withRouter(props => (
  <div>
    <p>{props.router.query.title}</p>
  </div>
))

export default Work;