import React from 'react';

import MetaCard from '../components/MetaCard';
import Publications from '../components/Publications';

const data = {
  title: "Publications",
  url: "/publication",
  subtitle: "Welcome to tkd portfolio!",
  main: "https://i.gyazo.com/3b8d2d378a8832a294d61f32e7d63704.jpg"
}

const Publication = () => (
  <div>
    <MetaCard data={data}/>
    <Publications />
  </div>
    
)

export default Publication