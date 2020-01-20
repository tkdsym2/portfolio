import React from 'react';

import {
  PubFrame,
  ContentsFrame,
  Header,
  ListWrapper,
  PubList,
  PdfLink,
  StyledAuthor
} from '../styles/publications/desktop';
import publications from '../contents/publications.json';

const Publications = () => (
  <PubFrame>
    <ContentsFrame>
      <Header>
        Conference Papers
      </Header>
      <ListWrapper>
        <PubList>Under Review...</PubList>
      </ListWrapper>
    </ContentsFrame>
    <ContentsFrame>
      <Header>Domestic Conferences & Symposiums</Header>
      <ListWrapper>
        {publications.domestic.map((content, index) => (
          <PubList key={index}>
            {content.authors.map((author, index) => 
              (index == Object.keys(content.authors).length-1) ? (
                (author === '高田一真' ? (
                  <StyledAuthor key={index}>{author}.&nbsp;</StyledAuthor>
                ) : (
                  <span key={index}>{author}.&nbsp;</span>
                ))
              ) : (
                (author === '高田一真' ? (
                  <StyledAuthor key={index}>{author},&nbsp;</StyledAuthor>
                ) : (
                  <span key={index}>{author},&nbsp;</span>
                ))
              )
            )}
            {content.title}.&nbsp;
            {content.conference}.&nbsp;
            {content.year}.&nbsp;
            <PdfLink href={content.url}>[PDF]</PdfLink>
          </PubList>
        ))}
      </ListWrapper>
    </ContentsFrame>
    <ContentsFrame>
      <Header>Workshops</Header>
      <ListWrapper>
        {publications.workshop.map((content, index) => (
          <PubList key={index}>
            {content.title}.&nbsp;
            {content.conference}.&nbsp;
            {content.date}.&nbsp;
            <PdfLink href={content.url}>[Link]</PdfLink>
          </PubList>
        ))}
      </ListWrapper>
    </ContentsFrame>
    <ContentsFrame>
      <Header>Exhibitions</Header>
      <ListWrapper>
        {publications.exhibitions.map((content, index) => (
          <PubList key={index}>
          {content.title},&nbsp;
          {content.theme},&nbsp;
          {content.place},&nbsp;
          {content.date}.&nbsp;
          <PdfLink href={content.url}>[Link]</PdfLink>
        </PubList>
        ))}
      </ListWrapper>
    </ContentsFrame>
  </PubFrame>
)

export default Publications;