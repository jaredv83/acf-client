import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MembersPreview extends Component {

  render() {
    const {displayName, image, intro, slug} = this.props;

    // TODO: remove inline styles and implement a system
    return (
      <div style={{
        height: '200px',
      }}>
        <img src={image.uri} style={{
          maxHeight: '75px',
          float: 'left',
        }} />
        <div style={{
          float: 'right',
          width: 'calc(100% - 150px)',
        }}>
          <p>
            <Link to={ `/members/${slug}` }>{displayName}</Link>
          </p>
          <p>{intro}</p>
        </div>
      </div>
    );
  }
}

MembersPreview.propTypes = {
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

export default MembersPreview;
