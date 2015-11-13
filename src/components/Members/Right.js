import React, { PropTypes } from 'react';
import classnames from 'classnames';
// import Twitter from './Twitter';

// Add twitter, displayName when ready
function Right({ recentWorks, reviews }) {
  const worksReviewsClass = classnames({
    'col-md-6': recentWorks && reviews,
    'col-md-12': !(recentWorks && reviews),
  });
  return (
    <div>
      <div className="box-light">{/* .box-light OR .box-dark */}
        <div className="row">
          {/* TWEETS */}
          {/* <Twitter twitter={twitter} /> */}
          {/* /TWEETS */}

        { recentWorks &&
          <div className={worksReviewsClass}>
            <div className="box-inner">
              <h3>
                <span>RECENT WORKS</span>
              </h3>
              <div className="" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                <p dangerouslySetInnerHTML={{ __html: recentWorks }} />
              </div>
            </div>
          </div>
        }
        { reviews &&
          <div className={worksReviewsClass}>
            <div className="box-inner">
              <h3>
                <span>REVIEWS</span>
              </h3>
              <div className="" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                <p dangerouslySetInnerHTML={{ __html: reviews }} />
              </div>
            </div>
          </div>
        }
        </div>
      </div>
    </div>
  );
}
Right.propTypes = {
  displayName: PropTypes.string,
};
// Logout.defaultProps = {};

export default Right;
