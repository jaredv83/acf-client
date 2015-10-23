import React, { Component } from 'react';

class MembersPreview extends Component {

  render() {
    const {displayName, intro} = this.props;

    return (
      <div>
        <p>{displayName}</p>
        <p>{intro}</p>
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
