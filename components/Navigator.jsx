import React from 'react';
import { withRouter } from 'next/router';

import { 
  NavFrame,
  StyledTitle,
  MenuFrame,
  StyledLink,
  StyledHomeIcon,
  StyledDocumentIcon,
  StyledPersonIcon
 } from '../styles/components/Navigator';

const DesktopNavigator = ({ router }) => (
  <NavFrame>
    <StyledTitle href="/">
      tkd.work
    </StyledTitle>
    <MenuFrame>
      <StyledLink href="/" active={router.pathname === '/' ? true:false} topic="Works">
        <StyledHomeIcon active={router.pathname === '/' ? true:false} />
      </StyledLink>
      <StyledLink href="/publication" active={router.pathname === '/publication' ? true:false} topic="Publication">
        <StyledDocumentIcon active={router.pathname === '/publication' ? true:false} />
      </StyledLink>
      <StyledLink href="/bio" active={router.pathname === '/bio' ? true:false} topic="Bio">
        <StyledPersonIcon active={router.pathname === '/bio' ? true:false}/>
      </StyledLink>
      {/* <Link href="/contact">
        <a>contact</a>
      </Link> */}
    </MenuFrame>
  </NavFrame>
)

export default withRouter(DesktopNavigator);