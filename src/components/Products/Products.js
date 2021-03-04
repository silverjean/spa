import React from 'react';

import HeroSection from '../HeroSection';
import { homeObjFour } from '../HomePage/Data';

function Products() {
  return (
    <>
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;
