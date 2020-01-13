import styled from 'styled-components';

export const DesktopFrame = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentsFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 2.5rem 0;
`

export const Header = styled.p`
  color: #000000;
  font-size: 1.7rem;
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
    width: 22rem;
    height: 0;
  }
`