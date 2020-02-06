import styled from 'styled-components';
import media from 'styled-media-query';

import { Black, HeaderSize, CardSize, MobileCardSize, huge } from '../theme';

export const DesktopFrame = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const ContentsFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0 4rem 0;
`

export const Header = styled.p`
  color: ${Black};
  font-size: ${HeaderSize};
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-weight: bold;
  margin: 0.3rem 0 0.1rem 0;
`
export const ContentsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.2rem;
  margin-top: 1rem;
`