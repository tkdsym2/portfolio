import styled from 'styled-components';

import { Black, HeaderSize, CardSize, Gray, SentenceSize, TopicSize } from '../theme';

export const FooterFrame = styled.div`
  width: 70%;
  margin: 0 auto;
`

export const FooterText = styled.p`
  color: ${Gray};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  margin-left: 0.5rem;
`