import React from 'react';
import { withRouter } from 'next/router';

import withMediaComponent from './MediaComponent';
import { 
  NavFrame,
  StyledTitle,
  MenuFrame,
  StyledLink,
  StyledHomeIcon,
  StyledDocumentIcon,
  StyledPersonIcon,
  ItemFrame
 } from '../styles/components/Navigator';

const MediumNavigator = () => (
  <div>
    hoge
  </div>
)

const DesktopNavigator = ({ router }) => (
  <NavFrame>
    <StyledTitle href="/">
      tkd.work
    </StyledTitle>
    <MenuFrame>
      <ItemFrame>
        <StyledHomeIcon />
        <StyledLink href="/" active={router.pathname === '/' ? true:false}>
          Works
        </StyledLink>
      </ItemFrame>
      <ItemFrame>
        <StyledDocumentIcon />
        <StyledLink href="/publication" active={router.pathname === '/publication' ? true:false}>
          Publications
        </StyledLink>
      </ItemFrame>
      <ItemFrame>
        <StyledPersonIcon />
        <StyledLink href="/bio" active={router.pathname === '/bio' ? true:false}>
          Bio
        </StyledLink>
      </ItemFrame>
      {/* <Link href="/contact">
        <a>contact</a>
      </Link> */}
    </MenuFrame>
  </NavFrame>
)

export default withRouter(DesktopNavigator);