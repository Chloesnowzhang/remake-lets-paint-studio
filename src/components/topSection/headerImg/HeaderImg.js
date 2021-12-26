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
/* <picture>
      <source
        srcSet="https://i.ibb.co/ZMpDCcH/flinders-street.jpg"
        media="(max-width: 576px)"
      />
      <img
        src="https://i.ibb.co/bKM9nNH/flinders-street.jpg"
        alt="Watercolor of Flinders Street"
      />
    </picture> */
