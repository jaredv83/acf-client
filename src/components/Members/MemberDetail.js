import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import InfoBox from './InfoBox';
import Footer from './Footer';
import Right from './Right';

class MembersDetail extends Component {

  createMarkup(html) {
    return {
      __html: html,
    };
  }

  render() {
    const { address, displayName, image, intro, links,
            bio, since, statement, twitter } = this.props;

    return (
      <div>
        <section className="page-header page-header-xs">
          <div className="container">
            {/* breadcrumbs */}
            <ol className="breadcrumb breadcrumb-inverse">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/members">
                  Members
                </Link>
              </li>
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
              <InfoBox address={address} image={image} displayName={displayName} since={since} intro={this.createMarkup(intro)}/>

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
                    {
                      links.map((link) => {
                        return (
                          <li className="margin-bottom-10">
                            <i className="fa fa-globe width-20 hidden-xs hidden-sm" />
                            <a href={link.url}>
                              {link.title}
                            </a>
                          </li>
                        );
                      })
                    }
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
    );
  }
}

MembersDetail.propTypes = {
  address: PropTypes.object,
  bio: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  image: PropTypes.shape({
    uri: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  intro: PropTypes.string,
  links: PropTypes.array,
  since: PropTypes.string,
  slug: PropTypes.string.isRequired,
  statement: PropTypes.string,
  twitter: PropTypes.array,
  usState: PropTypes.string,
};

export default MembersDetail;
