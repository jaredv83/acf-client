import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MembersPreview extends Component {

  render() {
    const {displayName, searchImg, intro, slug} = this.props;

    return (
      <div className="col-xs-12 col-sm-4 col-md-3">
        <div className="thumbnail" style={{
          height: '300px',
        }}>
          <div style={{
            maxHeight: '95%',
            overflowY: 'auto',
          }}>
            {
              searchImg &&
              <img src={searchImg.url} style={{
                maxHeight: '125px',
                margin: 'auto',
                display: 'block',
              }}/>
            }
            <div className="caption">
              <h4 className="nomargin" style={{
                textAlign: 'center',
              }}>
                <Link to={ `/members/${slug}` }>{displayName}</Link>
              </h4>
              <p dangerouslySetInnerHTML={{ __html: intro }} />
            </div>
          </div>
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
