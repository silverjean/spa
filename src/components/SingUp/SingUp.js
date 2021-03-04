import React from 'react';

import HeroSection from '../HeroSection';

import { homeObjThree } from '../HomePage/Data';

function SingUp() {
  return (
    <>
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SingUp;
