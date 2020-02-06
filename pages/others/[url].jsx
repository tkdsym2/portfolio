import React, { Component } from 'react';

import MetaCard from '../../components/MetaCard';
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
    {content.description.map((content, index) => (
      <StyledDescription key={index}>
        {content}
      </StyledDescription>
    ))}
  </div>
)

const Research = ({ data }) => (
  <div>
    <MetaCard data={data}/>
    <DetailFrame>
      <Header>{data.title}</Header>
      {data.subtitle !== '' ? <SubHeader>{data.subtitle}</SubHeader> : <span />}
      <MainImage src={data.main}/>
      <DescriptionFrame>
        {data.description[0].map((content, index) => (
          <StyledDescription key={index}>
            {content} 
          </StyledDescription>
        ))}
        {data.description[1].length !== 0 ? (
          data.description[1].map((content, index) => (
            <DetailBox key={index} content={content}/>
          ))
        ) : <span />}
      </DescriptionFrame>
    </DetailFrame>
  </div>
)

Research.getInitialProps = async ({ query }) => {
  const json = await import(`../../contents/works/${query.url}.json`)
  return {
    data: json
  }
}

export default Research;