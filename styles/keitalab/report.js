import styled from 'styled-components'

import {
  FrameSize,
  Black,
  TitleSize,
  HeaderSize,
  SentenceSize,
  TopicSize,
  Gray,
  Blue,
  BlackGray
 } from '../theme';

export const SectionHeader = styled.p`
  color: ${Black};
  font-size: ${HeaderSize};
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-top: 3rem;
`

export const Description = styled.p`
  color: ${BlackGray};
  font-size: ${SentenceSize};
  margin: 0;
  padding: 0;
  margin-top: 0.2rem;
`

export const SubSection =  styled.p`
  color: ${Black};
  font-size: ${TopicSize};
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-top: 1.0rem;
 `

export const SubSubSection =  styled.p`
  color: ${Black};
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

export const FigureBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FigureImage = styled.img`
  width: 80%;
  height: 80%;
`

export const Caption = styled.p`
  color: ${Gray};
  font-size: ${SentenceSize};
  font-weight: 400;
  margin: 0;
  padding: 0;
`
export const Link = styled.a`
  color: ${BlackGray};
  font-size: ${SentenceSize};
  /* font-family: 'Lato', sans-serif; */
  &:hover {
    color: ${Blue};
  }
  /* margin-right: 1.5rem; */
`