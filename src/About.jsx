import React from 'react';
import web from "../src/images/laptop1.jpg"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Common from './common';


const About = () => {
    return (
        <>
<Common name= 'Welcome to Home Page' imgsrc={web} visit='/contact' btnname='Contact Now' />
        
   </>
    );
}

export default About;