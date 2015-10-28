import React, { Component, PropTypes } from 'react';
import InfoBox from './InfoBox';
import Header from './Header';
import Footer from './Footer';

class MembersDetail extends Component {

  createMarkup(html) {
    return {
      __html: html,
    };
  }

  render() {
    const { displayName, image, bio, memberSince } = this.props;

    return (
      <div>
        {/* SLIDE TOP */}
        <div id="slidetop">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h6><i className="icon-heart" /> WHY SMARTY?</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa. </p>
              </div>
              <div className="col-md-4">
                <h6><i className="icon-attachment" /> RECENTLY VISITED</h6>
                <ul className="list-unstyled">
                  <li><a href="#"><i className="fa fa-angle-right" /> Consectetur adipiscing elit amet</a></li>
                  <li><a href="#"><i className="fa fa-angle-right" /> This is a very long text, very very very very very very very very very very very very </a></li>
                  <li><a href="#"><i className="fa fa-angle-right" /> Lorem ipsum dolor sit amet</a></li>
                  <li><a href="#"><i className="fa fa-angle-right" /> Dolor sit amet,consectetur adipiscing elit amet</a></li>
                  <li><a href="#"><i className="fa fa-angle-right" /> Consectetur adipiscing elit amet,consectetur adipiscing elit</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6><i className="icon-envelope" /> CONTACT INFO</h6>
                <ul className="list-unstyled">
                  <li><b>Address:</b> PO Box 21132, Here Weare St, <br /> Melbourne, Vivas 2355 Australia</li>
                  <li><b>Phone:</b> 1-800-565-2390</li>
                  <li><b>Email:</b> <a href="mailto:support@yourname.com">support@yourname.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <a className="slidetop-toggle" href="#">{/* toggle button */}</a>
        </div>
        {/* /SLIDE TOP */}
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
                <InfoBox image={image} displayName={displayName} memberSince={memberSince} />
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
                {/* /FLIP BOX */}
                <div className="box-light">{/* .box-light OR .box-dark */}
                  <div className="row">
                    {/* POPULAR POSTS */}
                    <div className="col-md-6 col-sm-6">
                      <div className="box-inner">
                        <h3>
                          <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                          POPULAR POSTS
                        </h3>
                        <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/b-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/6-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/d-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/a-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/5-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                        </div>
                      </div>
                      <div className="box-footer">
                        {/* INLINE SEARCH */}
                        <div className="inline-search clearfix">
                          <form action="#" method="get" className="widget_search nomargin">
                            <input type="search" placeholder="Search Post..." name="s" className="serch-input" />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                            <div className="clear" />
                          </form>
                        </div>
                        {/* /INLINE SEARCH */}
                      </div>
                    </div>
                    {/* /POPULAR POSTS */}
                    {/* FRIENDS */}
                    <div className="col-md-6 col-sm-6">
                      <div className="box-inner">
                        <h3>
                          <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                          FRIENDS
                        </h3>
                        <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                          <div className="clearfix margin-bottom-10">{/* squared item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/1-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Joana Doe</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /squared item */}
                          <div className="clearfix margin-bottom-10">{/* rounded item */}
                            <img className="thumbnail pull-left rounded" src="/images/demo/people/300x300/2-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Melissa Doe</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /rounded item */}
                          <div className="clearfix margin-bottom-10">{/* squared item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/3-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">{displayName}</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /squared item */}
                          <div className="clearfix margin-bottom-10">{/* rounded item */}
                            <img className="thumbnail pull-left rounded" src="/images/demo/people/300x300/4-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Suzana Doe</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /rounded item */}
                          <div className="clearfix margin-bottom-10">{/* squared item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/5-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Jolie Doe</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /squared item */}
                        </div>
                      </div>
                      <div className="box-footer">
                        {/* INLINE SEARCH */}
                        <div className="inline-search clearfix">
                          <form action="#" method="get" className="widget_search nomargin">
                            <input type="search" placeholder="Search Friend..." name="s" className="serch-input" />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                            <div className="clear" />
                          </form>
                        </div>
                        {/* /INLINE SEARCH */}
                      </div>
                    </div>
                    {/* /FRIENDS */}
                  </div>
                  <div className="row margin-top-30">
                    {/* DISCUSSIONS */}
                    <div className="col-md-6 col-sm-6">
                      <div className="box-inner">
                        <h3>
                          <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                          DISCUSSIONS
                        </h3>
                        <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/3-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">Joana Doe</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">12 min. ago</span>
                            </span>
                          </div>{/* /discussion item */}
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/4-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">Melissa Doe</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">54 min. ago</span>
                            </span>
                            </div>{/* /discussion item */}
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/5-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">juliet Doe</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">8 days ago</span>
                            </span>
                          </div>{/* /discussion item */}
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/6-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">Suanna Doe</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">12 day ago</span>
                            </span>
                          </div>{/* /discussion item */}
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/7-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">{displayName}</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">1 month ago</span>
                            </span>
                          </div>{/* /discussion item */}
                        </div>
                      </div>
                      <div className="box-footer">
                        {/* INLINE SEARCH */}
                        <div className="inline-search clearfix">
                          <form action="#" method="get" className="widget_search nomargin">
                            <input type="search" placeholder="Search Discussion..." name="s" className="serch-input" />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                            <div className="clear" />
                          </form>
                        </div>
                        {/* /INLINE SEARCH */}
                      </div>
                    </div>
                    {/* /DISCUSSIONS */}
                    {/* NOTIFICATIONS */}
                    <div className="col-md-6 col-sm-6">
                      <div className="box-inner">
                        <h3>
                          <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                          NOTIFICATIONS
                        </h3>
                        <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-success label-square pull-left">
                              <i className="fa fa-comment" />
                            </span>
                            <span className="size-14 text-muted"><b>New Comment</b>: <a href="blog-single-default.html">Lorem ipsum Dolor</a></span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-danger label-square pull-left">
                              <i className="glyphicon glyphicon-remove" />
                            </span>
                            <span className="size-14 text-muted"><b>Rejected</b>: <a href="#">Joana Doe</a> rejected friendship</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-warning label-square pull-left">
                              <i className="fa fa-warning" />
                            </span>
                            <span className="size-14 text-muted"><b>Warning</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-info label-square pull-left">
                              <i className="fa fa-info-circle" />
                            </span>
                            <span className="size-14 text-muted"><b>Info</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-primary label-square pull-left">
                              <i className="fa fa-check" />
                            </span>
                            <span className="size-14 text-muted"><b>Primary</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-default label-square pull-left">
                              <i className="fa fa-heart-o" />
                            </span>
                            <span className="size-14 text-muted"><b>Default</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-purple label-square pull-left">
                              <i className="fa fa-clock-o" />
                            </span>
                            <span className="size-14 text-muted"><b>Various</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                        </div>
                      </div>
                      <div className="box-footer">
                        {/* INLINE SEARCH */}
                        <div className="inline-search clearfix">
                          <form action="#" method="get" className="widget_search nomargin">
                            <input type="search" placeholder="Search notification..." name="s" className="serch-input" />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                            <div className="clear" />
                          </form>
                        </div>
                        {/* /INLINE SEARCH */}
                      </div>
                    </div>
                    {/* /NOTIFICATIONS */}
                  </div>
                </div>
                <form method="post" action="#" className="box-light margin-top-20">{/* .box-light OR .box-dark */}
                  <div className="box-inner">
                    <h4 className="uppercase">LEAVE A MESSAGE TO <strong>{displayName}</strong></h4>
                    <textarea required className="form-control word-count" data-maxlength={100} rows={5} placeholder="Type your message here..." />
                    <div className="text-muted text-right margin-top-3 size-12 margin-bottom-10">
                      <span>0/100</span> Words
                    </div>
                    <button type="submit" className="btn btn-primary"><i className="fa fa-check" /> SEND MESSAGE</button>
                  </div>
                </form>
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
  memberSince: PropTypes.string,
  slug: PropTypes.string.isRequired,
  usState: PropTypes.string,
};

export default MembersDetail;
