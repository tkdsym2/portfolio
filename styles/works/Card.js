import styled from 'styled-components';
import Link from 'next/link';

import { CardSize, TopicSize, SentenceSize, Black, Gray } from '../theme'

const StyledCardFrame = styled.div`
  width: ${CardSize};
  display: flex;
  flex-direction: column;
  margin: 0;
  margin: 0.5rem 0 0.5rem 0;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export const CardFrame = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <StyledCardFrame>
      {children}
    </StyledCardFrame>
  </Link>
)

export const CardImage = styled.img`
  width: ${CardSize};
`

export const CardTitle = styled.p`
  color: ${Black};
  font-size: ${TopicSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0;
  margin: 0.5rem 0 0 0;
`

export const CardYear = styled.p`
  color: ${Gray};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  margin: 0;
  margin: 0.2rem 0 0 0;
`