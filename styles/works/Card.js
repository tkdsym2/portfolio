import styled from 'styled-components';
import Link from 'next/link';
import media from 'styled-media-query';

import {
  CardSize,
  TopicSize,
  SentenceSize,
  Black,
  Gray,
  BlackGray,
  Blue,
  White
 } from '../theme'

const StyledCardFrame = styled.div`
  width: 100%;
  border: 1px solid ${Gray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-width: 0;
  overflow: auto;
  transition: .3s;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

export const CardFrame = ({ dir, url, children, ...props }) => (
  <Link href={`/${dir}/[${url}]`} as={`${dir}/${url}`} passHref>
    <StyledCardFrame>
      {children}
    </StyledCardFrame>
  </Link>
)

export const CardImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`

export const CardTitle = styled.p`
  color: ${Black};
  font-size: ${TopicSize};
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 0.01rem;
  margin: 0;
  margin: 0.3rem 0 0 0.3rem;
`

export const CardYear = styled.p`
  color: ${Gray};
  font-size: ${SentenceSize};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin: 0;
  margin: 0.1rem 0 0.3rem 0.3rem;
`