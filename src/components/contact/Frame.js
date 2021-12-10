import React, { Fragment, useState } from 'react';
import Spinner from '../utils/spinner/Spinner';

const Frame = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Fragment>
      {loading ? <Spinner /> : null}
      <iframe
        title="map"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJEbWZToJp1moRtfQN1qXCxTw&key=${process.env.REACT_APP_API_KEY}`}
        onLoad={() => setLoading(false)}
      ></iframe>
    </Fragment>
  );
};

export default Frame;
