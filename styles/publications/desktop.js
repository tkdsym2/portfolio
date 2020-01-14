import styled from 'styled-components';

import { Black, HeaderSize, CardSize, Gray, SentenceSize } from '../theme';

export const PubFrame = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const ContentsFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 0 0;
`

export const Header = styled.p`
  color: ${Black};
  font-size: ${HeaderSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0;
  margin: 0.3rem 0 0.8rem 0;
`

export const ListWrapper = styled.ol`
  padding-left: 1rem;
  list-style: lower-roman;
  margin: 0;
`

export const PubList = styled.li`
  color: ${Gray};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  padding: 0;
  padding: 0.3rem 0 0.3rem 0.5rem;
`

export const PdfLink = styled.a`
  color: ${Gray};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
`