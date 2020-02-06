import React from 'react';

import MetaCard from '../components/MetaCard';
import Publications from '../components/Publications';

const data = {
  title: "Publications",
  url: "/publication",
  subtitle: "Welcome to tkd portfolio!",
  main: "https://i.gyazo.com/8987dd294fb88b2580d7ec71b3dd20b1.jpg",
}

const Publication = () => (
  <div>
    <MetaCard data={data}/>
    <Publications />
  </div>
    
)

export default Publication