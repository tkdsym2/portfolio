import React from 'react';

import MetaCard from '../components/MetaCard';
import Profile from '../components/bio/desktop/Profile';

const data = {
  title: "Bio",
  url: "/bio",
  subtitle: "Welcome to tkd portfolio!",
  main: "https://i.gyazo.com/8987dd294fb88b2580d7ec71b3dd20b1.jpg",
}

const Bio = () => (
  <div>
    <MetaCard data={data}/>
    <Profile />
  </div>
)

export default Bio;