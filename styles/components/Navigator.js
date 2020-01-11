import styled from 'styled-components';
import Link from 'next/link';

export const NavFrame = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
` ;

const NoActiveLink = styled.p`
  color: #000000;
  font-size: 1.2rem;
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
    background-color: #2ecc71;
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
  color: green;
  font-size: 1.2rem;
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
