import React from 'react';

import MetaCard from '../components/MetaCard';
import Works from '../components/Works';

const data = {
  title: "Works",
  url: "/",
  subtitle: "Welcome to tkd portfolio!",
  main: "https://i.gyazo.com/3b8d2d378a8832a294d61f32e7d63704.jpg"
}

const Home = () => {
  return (
    <div>
      <MetaCard data={data}/>
      <Works />
    </div>
  )
}

export default Home