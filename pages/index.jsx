import React from 'react';

import MetaCard from '../components/MetaCard';
import Works from '../components/Works';

const data = {
  title: "Works",
  url: "/",
  subtitle: "Welcome to tkd portfolio!",
  main: "https://i.gyazo.com/8987dd294fb88b2580d7ec71b3dd20b1.jpg",
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