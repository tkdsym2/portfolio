import React from 'react';

import MetaCard from '../components/MetaCard';
import Profile from '../components/bio/desktop/Profile';

const data = {
  title: "Bio",
  url: "/bio",
  subtitle: "Welcome to tkd portfolio!",
  main: "https://i.gyazo.com/3b8d2d378a8832a294d61f32e7d63704.jpg"
}

const Bio = () => (
  <div>
    <MetaCard data={data}/>
    <Profile />
  </div>
)

export default Bio;