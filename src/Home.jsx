import React from 'react';
import web from "../src/images/laptop.jpg"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Common from './common';


const Home = () => {
  return (
   <>
<Common name= 'Grow your business with' imgsrc={web} visit='/service' btnname='Get Started' />
   </>
  );
}

export default Home;