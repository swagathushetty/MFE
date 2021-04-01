//this function allows us to render from our child application 
//this function will work with any child framework angulat,vue etc 
//As long as output is html this function will work


import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
