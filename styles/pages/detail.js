import styled from 'styled-components';

import {
 FrameSize,
 Black,
 TitleSize,
 HeaderSize,
 SentenceSize,
 Gray,
 Blue
} from '../theme';

export const DetailFrame = styled.div`
  width: ${FrameSize};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const Header = styled.p`
  color: ${Black};
  font-size: ${TitleSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0;
`

export const SubHeader = styled.p`
  color: ${Gray};
  font-size: ${HeaderSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0.7rem 0 0 0;
`

export const MainImage = styled.img`
  width: 100%;
  margin-top: 3rem;
`

export const DescriptionFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.3rem 0 0 0;
`

export const StyledDescription = styled.p`
  color: ${Gray};
  font-size: ${SentenceSize};
`

export const StyledDetailFrame = styled.div`
  margin-top: 1.5rem;
`

export const LinkFrame = styled.div`
  margin: 0;
`

export const LinkHeader = styled.p`
  color: ${Black};
  font-size: ${HeaderSize};
  margin: 0;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
`

export const WebLink = styled.a`
  color: ${Gray};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  &:hover {
    color: ${Blue};
  }
  margin-right: 1.5rem;
`

export const MovieFrame = styled.div`
  margin: 0;
  padding: 0;
`

export const FrameBody = styled.div`
  height: 100%;
`