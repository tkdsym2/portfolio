import React from 'react';

import Card from './Card';
import { ContentsFrame, Header, ContentsList } from '../../styles/works/works_desktop'
import contents from '../../contents/contents.json'

const Exhibitions = () => (
  <ContentsFrame>
    <Header>Exhibitions</Header>
    <ContentsList>
      {contents.exhibition.map((content, index) => (
        <Card key={index} dir="exhibitions" content={content} />
      ))}
    </ContentsList>
  </ContentsFrame>
)

export default Exhibitions;