import React from 'react';
import { withRouter } from 'next/router';

import { NavFrame, StyledLink } from '../styles/components/Navigator';

const Navigator = ({ router }) => (
  <div>
    <header>
      <NavFrame>
        <StyledLink href="/" active={router.pathname === '/' ? true:false}>
          Home
        </StyledLink>
        <StyledLink href="/publication" active={router.pathname === '/publication' ? true:false}>
          Publications
        </StyledLink>
        <StyledLink href="/bio" active={router.pathname === '/bio' ? true:false}>
          Bio
        </StyledLink>
        {/* <Link href="/contact">
          <a>contact</a>
        </Link> */}
      </NavFrame>
    </header>
  </div>
)

export default withRouter(Navigator);