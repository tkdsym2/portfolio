import React from 'react';
import { withRouter } from 'next/router';

import { NavFrame, StyledTitle, MenuFrame, StyledLink } from '../styles/components/Navigator';

const Navigator = ({ router }) => (
  <NavFrame>
    <StyledTitle href="/">
      tkd.work
    </StyledTitle>
    <MenuFrame>
      <StyledLink href="/" active={router.pathname === '/' ? true:false}>
        Works
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
    </MenuFrame>
  </NavFrame>
)

export default withRouter(Navigator);