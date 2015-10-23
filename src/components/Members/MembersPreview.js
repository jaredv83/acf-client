import React, { Component } from 'react';

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
          width: 'calc(100% - 100px);',
        }}>
          <p>
            <a href={slug}>{displayName}</a>
          </p>
          <p>{intro}</p>
        </div>
      </div>
    );
  }
}

MembersPreview.propTypes = {
  displayName: React.PropTypes.string.isRequired,
  image: React.PropTypes.shape({
    uri: React.PropTypes.string.isRequired,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
  }),
  intro: React.PropTypes.string,
  slug: React.PropTypes.string.isRequired,
  usState: React.PropTypes.string,
};

export default MembersPreview;
