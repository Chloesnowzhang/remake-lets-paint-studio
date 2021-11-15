import React from 'react';

const HeaderImg = () => {
  return (
    <picture>
      <source
        srcSet="https://lh3.googleusercontent.com/Mj5vEmeu_4QqZS1rAtwP8RfFjtyo39ng1zd5jnh01k9DwPD7l0q_mTiCeaMmOm4ce2c2tgARtVYdEIIB=w480-h270-p-no-v0"
        media="(max-width: 576px)"
      />
      <source
        srcSet="https://lh3.googleusercontent.com/Mj5vEmeu_4QqZS1rAtwP8RfFjtyo39ng1zd5jnh01k9DwPD7l0q_mTiCeaMmOm4ce2c2tgARtVYdEIIB=w768-h432-p-no-v0"
        media="(min-width: 577px)"
      />
      <img
        alt="Tram driving in front of Flinders Station"
        src="https://lh3.googleusercontent.com/Mj5vEmeu_4QqZS1rAtwP8RfFjtyo39ng1zd5jnh01k9DwPD7l0q_mTiCeaMmOm4ce2c2tgARtVYdEIIB=w1080-h608-p-no-v0"
      />
    </picture>
  );
};

export default HeaderImg;
