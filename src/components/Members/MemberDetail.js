import React, { Component, PropTypes } from 'react';

class MembersDetail extends Component {

  render() {
    const {displayName} = this.props;
    return (
      <div>
        <h1>{displayName}</h1>
      </div>
    );
  }
}

MembersDetail.propTypes = {
  displayName: PropTypes.string.isRequired,
};

export default MembersDetail;
