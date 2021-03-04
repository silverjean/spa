import React from 'react';

import HeroSection from '../HeroSection';
import Pricing from '../Pricing';

import { homeObjOne } from '../HomePage/Data';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Services;
