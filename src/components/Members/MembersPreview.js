import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MembersPreview extends Component {

  render() {
    const {displayName, searchImg, intro, slug} = this.props;

    // TODO: remove inline styles and implement a system
    return (
      <div style={{
        height: '200px',
      }}>
        {
          searchImg &&
          <img src={searchImg.url} style={{
            maxHeight: '75px',
            float: 'left',
          }} />
        }

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
  searchImg: PropTypes.shape({
    url: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  intro: PropTypes.string,
  slug: PropTypes.string.isRequired,
  usState: PropTypes.string,
};

export default MembersPreview;
