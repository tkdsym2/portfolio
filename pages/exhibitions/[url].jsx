import React, { Component } from 'react';

import MetaCard from '../../components/MetaCard';
import {
  DetailFrame,
  Header,
  SubHeader,
  MainImage,
  DescriptionFrame,
  StyledDescription,
  StyledDetailFrame,
  LinkFrame,
  LinkHeader,
  WebLink,
  MovieFrame,
  FrameBody
} from '../../styles/pages/detail';

const opts = {
  width: '650',
  height: '390',
  playerVars: {
    autoplay: 0
  },
};

const DetailBox = ({ content }) => (
  <StyledDetailFrame>
    {content.image !== "" ? (
      <MainImage src={content.image} />
    ) : (
      <span />
    )}
    <StyledDescription>
      {content.description}
    </StyledDescription>
  </StyledDetailFrame>
)

const Exhibition = ({ data }) => (
  <div>
    <MetaCard data={data}/>
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
      {data.youtube !== "none" ? (
        <MovieFrame>
          <LinkHeader>Video</LinkHeader>
          <YouTube 
            videoId={data.youtube}
            opts={opts}
          />
        </MovieFrame>
      ) : <span />}
      {data.website.length !== 0 ? (
        <LinkFrame>
          <LinkHeader>Links</LinkHeader>
          {data.website.map((content, index) => (
          <WebLink key={index} href={content.link} target="_blank">{content.title}</WebLink>
          ))}
        </LinkFrame>
      ) : <span />}
    </DetailFrame>
  </div>
)

Exhibition.getInitialProps = async ({ query }) => {
  const json = await import(`../../contents/exhibition/${query.url}.json`)
  return {
    data: json
  }
}

export default Exhibition;