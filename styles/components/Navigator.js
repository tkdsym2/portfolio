import styled from 'styled-components';
import Link from 'next/link';
import media from 'styled-media-query';
import { Home } from 'styled-icons/fa-solid/Home';
import { DocumentText } from 'styled-icons/typicons/DocumentText';
import { Person } from 'styled-icons/material/Person';

import {
  Black,
  TitleSize,
  Blue,
  SentenceSize,
  Pink,
  large,
  medium,
  small,
  TopicSize,
  NavIconSize
} from '../theme'

export const NavFrame = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 1rem;
`

const HeaderTitle = styled.p`
  color: #${Black};
  font-size: ${TitleSize};
  font-family: 'Titillium Web', sans-serif;
  font-weight: 900;
  margin: 0.5em 1.2em 0 1.2em;
  &:hover {
    cursor: pointer;
  }
`

export const MenuFrame = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
` ;

export const StyledHomeIcon = styled(Home).attrs(props => ({
  size: `${NavIconSize}`,
  color: `${props.active ? `${Blue}`:`${Black}`}`
}))`
  &:hover {
    cursor: pointer;
    color: ${Blue};
  }
`

export const StyledDocumentIcon = styled(DocumentText).attrs(props => ({
  size: `${NavIconSize}`,
  color: `${props.active ? `${Blue}`:`${Black}`}`
}))`
  &:hover {
    cursor: pointer;
    color: ${Blue};
  }
`

export const StyledPersonIcon = styled(Person).attrs(props => ({
  size: `${NavIconSize}`,
  color: `${props.active ? `${Blue}`:`${Black}`}`
}))`
  &:hover {
    cursor: pointer;
    color: ${Blue};
  }
`

export const ItemFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 1.2em 0 1.2em;
`

const NoActiveLink = styled.p`
  color: ${Black};
  font-size: ${TopicSize};
  font-family: 'Amarante', cursive;
  /* font-weight: 700; */
  /* margin: 0.5em 1.2em 1em 1.2em; */
  margin-left: 0.2em;
  position: relative;
  transition: .3s;
  &:hover {
    cursor: pointer;
    color: ${Blue};
  }

  ${media.lessThan(`${medium}`)`
    display: none;
  `}
`

const ActiveLink = styled.p`
  color: ${Blue};
  font-size: ${TopicSize};
  font-family: 'Poppins', sans-serif;
  /* font-weight: 700; */
  /* margin: 0.5em 1.2em 1em 1.2em; */
  margin-left: 0.2em;
  position: relative;
  transition: .3s;

  ${media.lessThan(`${medium}`)`
    display: none;
  `}
`

export const StyledLink = ({href, children, ...props}) => (
  <Link href={href} passHref>
    <ItemFrame>
      {children}
      {props.active ? (<ActiveLink>{props.topic}</ActiveLink>) : 
      (<NoActiveLink>{props.topic}</NoActiveLink>)}
    </ItemFrame>
  </Link>
)

export const StyledTitle = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <HeaderTitle>
      {children}
    </HeaderTitle>
  </Link>
)