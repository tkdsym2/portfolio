import React from 'react';

import {
  CardFrame,
  CardImage,
  CardTitle,
  CardYear
} from '../../styles/works/Card'

const Card = ({ content }) => (
  <CardFrame href={`/work?title=${content.title}`}>
    <CardImage src={content.thumb}/>
    <CardTitle>{content.title}</CardTitle>
    <CardYear>{content.year}</CardYear>
  </CardFrame>
)

export default Card;