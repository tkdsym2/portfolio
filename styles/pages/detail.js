import styled from 'styled-components';

import {
 FrameSize,
 Black,
 TitleSize,
 HeaderSize,
 SentenceSize,
 Gray
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
`

export const SubHeader = styled.p`
  color: ${Gray};
  font-size: ${HeaderSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
`

export const MainImage = styled.img`
  width: 100%;
`

export const DescriptionFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 0;
`

export const StyledDescription = styled.p`
  color: ${Gray};
  font-size: ${SentenceSize};
`