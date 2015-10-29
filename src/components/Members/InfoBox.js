import React, { PropTypes } from 'react';

function InfoBox({ address, image, intro, displayName, since }) {
  const memberSince = `Member since: ${since}`;
  return (
    <div className="thumbnail text-center">
      { image && <img src={image.uri} alt /> }
      <h2 className="size-18 margin-top-10 margin-bottom-0">{displayName}</h2>
      { since &&
        <h3 className="size-11 margin-top-0 margin-bottom-10 text-muted">
          {memberSince}
        </h3>
      }
      <h3 className="size-11 margin-top-0 margin-bottom-10 text-muted">
        {address.city}, {address.state}
      </h3>
      <p dangerouslySetInnerHTML={intro} />
    </div>
  );
}
InfoBox.propTypes = {
  address: PropTypes.object,
  image: PropTypes.object,
  intro: PropTypes.object,
  displayName: PropTypes.string,
  since: PropTypes.string,
  statement: PropTypes.string,
};
// Logout.defaultProps = {};

export default InfoBox;
