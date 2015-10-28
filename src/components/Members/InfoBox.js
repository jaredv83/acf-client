import React, { PropTypes } from 'react';

function InfoBox({ image, displayName, since }) {
  return (
    <div className="thumbnail text-center">
      { image && <img src={image.uri} alt /> }
      <h2 className="size-18 margin-top-10 margin-bottom-0">{displayName}</h2>
      { since &&
        <h3 className="size-11 margin-top-0 margin-bottom-10 text-muted">
          {since}
        </h3>
      }
    </div>
  );
}
InfoBox.propTypes = {
  image: PropTypes.object,
  displayName: PropTypes.string,
  since: PropTypes.string,
};
// Logout.defaultProps = {};

export default InfoBox;
