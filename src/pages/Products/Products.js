import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import Pricing from '../../components/Pricing/Pricing';
import { homeObjFour, homeObjThree, homeObjTwo } from './Data';

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
