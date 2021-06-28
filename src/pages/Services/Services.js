import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import Pricing from '../../components/Pricing/Pricing';
import { homeObjFour } from './Data';

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Services;
