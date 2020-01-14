import styled from 'styled-components';
import Link from 'next/link';

import { Black, TitleSize, Blue, SentenceSize, Pink} from '../theme'

export const NavFrame = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderTitle = styled.p`
  color: #${Black};
  font-size: ${TitleSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0.5em 1.2em 1em 1.2em;
  &:hover {
    cursor: pointer;
  }
`

export const MenuFrame = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
` ;

const NoActiveLink = styled.p`
  color: ${Black};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  margin: 0.5em 1.2em 1em 1.2em;
  position: relative;
  transition: .3s;
  &:after {
    position: absolute;
    top: 1.1em;
    bottom: 0;
    left: 0;
    content: '';
    width: 0;
    height: 3px;
    background-color: ${Blue};
    transition: .3s;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
    color: red;
  }
`

const ActiveLink = styled.p`
  color: ${Pink};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  margin: 0.5em 1.2em 1em 1.2em;
  position: relative;
  transition: .3s;
`

export const StyledLink = ({href, children, ...props}) => (
  <Link href={href} passHref>
    {props.active ? (<ActiveLink>{children}</ActiveLink>) : 
    (<NoActiveLink active={props.active}>{children}</NoActiveLink>)}
  </Link>
)

export const StyledTitle = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <HeaderTitle>
      {children}
    </HeaderTitle>
  </Link>
)