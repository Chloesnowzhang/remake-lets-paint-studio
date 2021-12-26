import React from 'react';

import Picture from '../../utils/picture/Picture';
import image750 from './flinders-street-750.jpg';
import image1080 from './flinders-street-1080.jpeg';

const HeaderImg = () => {
  return (
    <Picture srcsetUrl={image1080} imgUrl={image750} alt="Flinders Street" />
  );
};

export default HeaderImg;
