import React, { Component } from 'react';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import axios from 'axios';

import {
  DetailFrame,
  Header,
  SubHeader,
  MainImage,
  DescriptionFrame,
  StyledDescription
} from '../../styles/pages/detail';

const DetailBox = ({ content }) => (
  <div>
    {content.image !== "" ? (
      <MainImage src={content.image} />
    ) : (
      <span />
    )}
    <StyledDescription>
      {content.description}
    </StyledDescription>
  </div>
)

const Research = ({ data }) => (
  <DetailFrame>
    <Header>{data.title}</Header>
    {data.subtitle !== '' ? <SubHeader>{data.subtitle}</SubHeader> : <span />}
    <MainImage src={data.main}/>
    <DescriptionFrame>
      <StyledDescription>
        {data.description[0]}
      </StyledDescription>
      {data.description[1].length !== 0 ? (
        data.description[1].map((content, index) => (
          <DetailBox key={index} content={content}/>
        ))
      ) : <span />}
    </DescriptionFrame>
  </DetailFrame>
)

Research.getInitialProps = async ({ query }) => {
  const json = await import(`../../contents/works/${query.url}.json`)
  return {
    data: json
  }
}

export default Research;