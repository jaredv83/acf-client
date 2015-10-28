import React, { Component, PropTypes } from 'react';
import InfoBox from './InfoBox';
import Header from './Header';
import Footer from './Footer';
import Right from './Right';

class MembersDetail extends Component {

  createMarkup(html) {
    return {
      __html: html,
    };
  }

  render() {
    const { displayName, image, bio, since } = this.props;

    return (
      <div>
        {/* wrapper */}
        <div id="wrapper">
          <div id="header" className="sticky clearfix">
            {/* TOP NAV */}
            <Header />
            {/* /Top Nav */}
          </div>
          <section className="page-header page-header-xs">
            <div className="container">
              {/* breadcrumbs */}
              <ol className="breadcrumb breadcrumb-inverse">
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li className="active">{displayName}</li>
              </ol>{/* /breadcrumbs */}
            </div>
          </section>
          {/* /PAGE HEADER */}
          {/* */}
          <section>
            <div className="container">
              {/* LEFT */}
              <div className="col-lg-3 col-md-3 col-sm-4">
                <InfoBox image={image} displayName={displayName} since={since} />
                {/* completed */}
                <div className="margin-bottom-30">
                  <label>88% completed profile</label>
                  <div className="progress progress-xxs">
                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{width: '88%', minWidth: '2em'}} />
                  </div>
                </div>
                {/* /completed */}
                {/* SIDE NAV */}
                <ul className="side-nav list-group margin-bottom-60" id="sidebar-nav">
                  <li className="list-group-item active"><a href="page-profile.html"><i className="fa fa-eye" /> PROFILE</a></li>
                  <li className="list-group-item"><a href="page-profile-projects.html"><i className="fa fa-tasks" /> PROJECTS</a></li>
                  <li className="list-group-item"><a href="page-profile-comments.html"><i className="fa fa-comments-o" /> COMMENTS</a></li>
                  <li className="list-group-item"><a href="page-profile-history.html"><i className="fa fa-history" /> HISTORY</a></li>
                  <li className="list-group-item"><a href="page-profile-settings.html"><i className="fa fa-gears" /> SETTINGS</a></li>
                  <li className="list-group-item list-toggle">
                    <a data-toggle="collapse" data-parent="#sidebar-nav" href="#collapse-1">DROPDOWN EXAMPLE</a>
                    <ul id="collapse-1" className="collapse">{/* NOTE: "collapse in" to be open on page load */}
                      <li><a href="#"><i className="fa fa-angle-right" /> SUMBENU 1</a></li>
                      <li>
                        <span className="badge badge-red">New</span>
                        <a href="#"><i className="fa fa-angle-right" /> SUMBENU 2</a>
                      </li>
                      <li className="active"><a href="#"><i className="fa fa-angle-right" /> SUMBENU 3</a></li>
                      <li><a href="#"><i className="fa fa-angle-right" /> SUMBENU 4</a></li>
                    </ul>
                  </li>
                </ul>
                {/* /SIDE NAV */}
                {/* info */}
                <div className="box-light margin-bottom-30">{/* .box-light OR .box-light */}
                  <div className="row margin-bottom-20">
                    <div className="col-md-4 col-sm-4 col-xs-4 text-center bold">
                      <h2 className="size-30 margin-top-10 margin-bottom-0 font-raleway">12</h2>
                      <h3 className="size-11 margin-top-0 margin-bottom-10 text-info">PROJECTS</h3>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4 text-center bold">
                      <h2 className="size-30 margin-top-10 margin-bottom-0 font-raleway">34</h2>
                      <h3 className="size-11 margin-top-0 margin-bottom-10 text-info">TASKS</h3>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4 text-center bold">
                      <h2 className="size-30 margin-top-10 margin-bottom-0 font-raleway">32</h2>
                      <h3 className="size-11 margin-top-0 margin-bottom-10 text-info">UPLOADS</h3>
                    </div>
                  </div>
                  {/* /info */}
                  <div className="text-muted">
                    <h2 className="size-18 text-muted margin-bottom-6"><b>About</b> {displayName}</h2>
                    <p>Lorem ipsum dolor sit amet diam nonummy nibh dolore.</p>
                    <ul className="list-unstyled nomargin">
                      <li className="margin-bottom-10"><i className="fa fa-globe width-20 hidden-xs hidden-sm" /> <a href="http://www.stepofweb.com">www.stepofweb.com</a></li>
                      <li className="margin-bottom-10"><i className="fa fa-facebook width-20 hidden-xs hidden-sm" /> <a href="http://www.facebook.com/stepofweb">stepofweb</a></li>
                      <li className="margin-bottom-10"><i className="fa fa-twitter width-20 hidden-xs hidden-sm" /> <a href="http://www.twitter.com/stepofweb">@stepofweb</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="col-lg-9 col-md-9 col-sm-8">
                {/* FLIP BOX */}
                <div className="box-flip box-icon box-icon-center box-icon-round box-icon-large text-center nomargin">
                  <div className="front">
                    <div className="box1 noradius">
                      <div className="box-icon-title">
                        <i className="fa fa-user" />
                        <h2>{displayName} – Profile</h2>
                      </div>
                      <div dangerouslySetInnerHTML={this.createMarkup(bio)} />
                    </div>
                  </div>
                  <div className="back">
                    <div className="box2 noradius">
                      <h4>WHO AM I?</h4>
                      <hr />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque.</p>
                    </div>
                  </div>
                </div>
                <Right displayName={displayName} />
              </div>
            </div>
          </section>
          {/* / */}
          {/* FOOTER */}
          <Footer />
          {/* /FOOTER */}
        </div>
      </div>
    );
  }
}

MembersDetail.propTypes = {
  bio: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  image: PropTypes.shape({
    uri: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  intro: PropTypes.string,
  since: PropTypes.string,
  slug: PropTypes.string.isRequired,
  usState: PropTypes.string,
};

export default MembersDetail;
