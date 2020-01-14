import styled from 'styled-components';

import { Black, HeaderSize, CardSize } from '../theme';

export const DesktopFrame = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const ContentsFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 2.5rem 0;
`

export const Header = styled.p`
  color: ${Black};
  font-size: ${HeaderSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0.3rem 0 0.1rem 0;
`
export const ContentsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  &:after {
    content: "";
    display: block;
    width: ${CardSize};
    height: 0;
  }
`