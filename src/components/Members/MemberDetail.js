import React, { Component, PropTypes } from 'react';

class MembersDetail extends Component {

  render() {
    const {displayName, image} = this.props;
    return (
      <div>
        <h1>{displayName}</h1>
        <img src={image.uri} style={{
          display: 'inline-block',
          paddingRight: '10px',
        }} />
      </div>
    );
  }
}

MembersDetail.propTypes = {
  displayName: PropTypes.string.isRequired,
  image: PropTypes.shape({
    uri: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  intro: PropTypes.string,
  slug: PropTypes.string.isRequired,
  usState: PropTypes.string,
};

export default MembersDetail;
