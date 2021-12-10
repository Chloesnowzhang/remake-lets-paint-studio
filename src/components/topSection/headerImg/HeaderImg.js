import React from 'react';

const HeaderImg = () => {
  return (
    <picture>
      <source
        srcSet="https://i.ibb.co/ZMpDCcH/flinders-street.jpg"
        media="(max-width: 576px)"
      />
      <img
        src="https://i.ibb.co/bKM9nNH/flinders-street.jpg"
        alt="Watercolor of Flinders Street"
      />
    </picture>
  );
};

export default HeaderImg;
