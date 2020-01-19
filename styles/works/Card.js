import styled from 'styled-components';
import Link from 'next/link';
import media from 'styled-media-query';

import { CardSize, TopicSize, SentenceSize, Black, Gray, MobileCardSize, huge, hhuge } from '../theme'

const StyledCardFrame = styled.div`
  /* width: ${CardSize}; */
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-width: 0;
  overflow: auto;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
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
  /* ${media.lessThan(`${huge}`)`
    width: ${MobileCardSize};
  `} */
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