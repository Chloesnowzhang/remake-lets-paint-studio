import React, { Fragment } from 'react';

import Spinner from '../spinner/Spinner';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  handleLoading = () => {
    this.setState({ loading: false });
  };

  render() {
    const { srcsetUrl, alt, media, imgUrl } = this.props;
    const { loading } = this.state;
    const { handleLoading } = this;

    return (
      <Fragment>
        {loading && <Spinner />}
        <picture
          onLoad={handleLoading}
          style={{ display: `${loading ? 'none' : 'block'}` }}
        >
          <source srcSet={srcsetUrl} alt={alt} media={media} />
          <img src={imgUrl} alt={alt} />
        </picture>
      </Fragment>
    );
  }
}

Picture.defaultProps = {
  media: '(min-width: 769px)',
};

export default Picture;
