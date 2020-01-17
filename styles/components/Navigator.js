import styled from 'styled-components';
import Link from 'next/link';
import media from 'styled-media-query';
import { Home } from 'styled-icons/fa-solid/Home';
import { DocumentText } from 'styled-icons/typicons/DocumentText';
import { Person } from 'styled-icons/material/Person';

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

export const StyledHomeIcon = styled(Home).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledDocumentIcon = styled(DocumentText).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledPersonIcon = styled(Person).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const ItemFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 1.2em 0 1.2em;
`

const NoActiveLink = styled.p`
  color: ${Black};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  /* margin: 0.5em 1.2em 1em 1.2em; */
  margin-left: 0.2em;
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

  ${media.lessThan('medium')`
    display: none;
  `}
`

const ActiveLink = styled.p`
  color: ${Pink};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  /* margin: 0.5em 1.2em 1em 1.2em; */
  margin-left: 0.2em;
  position: relative;
  transition: .3s;

  ${media.lessThan('medium')`
    display: none;
  `}
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