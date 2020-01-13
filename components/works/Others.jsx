import React from 'react';

import Card from './Card';
import { ContentsFrame, Header, ContentsList } from '../../styles/works/works_desktop'
import contents from '../../contents/contents.json'

const Others = () => (
  <ContentsFrame>
    <Header>Others</Header>
    <ContentsList>
      {contents.others.map((content, index) => (
        <Card key={index} content={content} />
      ))}
    </ContentsList>
  </ContentsFrame>
)

export default Others;