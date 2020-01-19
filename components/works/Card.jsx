import React from 'react';

import {
  CardFrame,
  CardImage,
  CardTitle,
  CardYear
} from '../../styles/works/Card'

const Card = ({ content, ...props }) => (
  <CardFrame dir={`${props.dir}`} url={`${content.url}` }>
    <CardImage src={content.thumb}/>
    <CardTitle>{content.title}</CardTitle>
    <CardYear>{content.year}</CardYear>
  </CardFrame>
)

export default Card;