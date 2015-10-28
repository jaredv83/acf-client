import React from 'react';

function Header() {
  return (
    <header id="topNav">
      <div className="container">
        {/* Mobile Menu Button */}
        <button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
          <i className="fa fa-bars" />
        </button>
        {/* BUTTONS */}
        <ul className="pull-right nav nav-pills nav-second-main">
          {/* SEARCH */}
          <li className="search">
            <a href="#">
              <i className="fa fa-search" />
            </a>
            <div className="search-box">
              <form action="page-search-result-1.html" method="get">
                <div className="input-group">
                  <input type="text" name="src" placeholder="Search" className="form-control" />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">Search</button>
                  </span>
                </div>
              </form>
            </div>
          </li>
          {/* /SEARCH */}
        </ul>
        {/* /BUTTONS */}
        {/* Logo */}
        <a className="logo pull-left" href="index.html">
          <img src="https://composersforum.org/sites/all/themes/acfzen/acfzen/logo.png" alt />
        </a>
        {/*
      Top Nav

      AVAILABLE CLASSES:
      submenu-dark = dark sub menu
    */}
        <div className="navbar-collapse pull-right nav-main-collapse collapse">
          <nav className="nav-main">
            {/*
          NOTE

          For a regular link, remove "dropdown" class from LI tag and "dropdown-toggle" class from the href.
          Direct Link Example:

          <li>
            <a href="#">HOME</a>
          </li>
        */}
            <ul id="topMain" className="nav nav-pills nav-main">
              <li className="dropdown">{/* HOME */}
                <a className="dropdown-toggle" href="#">
                  HOME
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      HOME CORPORATE
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="index-corporate-1.html">CORPORATE LAYOUT 1</a></li>
                      <li><a href="index-corporate-2.html">CORPORATE LAYOUT 2</a></li>
                      <li><a href="index-corporate-3.html">CORPORATE LAYOUT 3</a></li>
                      <li><a href="index-corporate-4.html">CORPORATE LAYOUT 4</a></li>
                      <li><a href="index-corporate-5.html">CORPORATE LAYOUT 5</a></li>
                      <li><a href="index-corporate-6.html">CORPORATE LAYOUT 6</a></li>
                      <li><a href="index-corporate-7.html">CORPORATE LAYOUT 7</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      HOME PORTFOLIO
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="index-portfolio-1.html">PORTFOLIO LAYOUT 1</a></li>
                      <li><a href="index-portfolio-2.html">PORTFOLIO LAYOUT 2</a></li>
                      <li><a href="index-portfolio-masonry.html">PORTFOLIO MASONRY</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      HOME BLOG
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="index-blog-1.html">BLOG LAYOUT 1</a></li>
                      <li><a href="index-blog-2.html">BLOG LAYOUT 2</a></li>
                      <li><a href="index-blog-3.html">BLOG LAYOUT 3</a></li>
                      <li><a href="index-blog-4.html">BLOG LAYOUT 4</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      HOME SHOP
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="index-shop-1.html">SHOP LAYOUT 1</a></li>
                      <li><a href="index-shop-2.html">SHOP LAYOUT 2</a></li>
                      <li><a href="index-shop-3.html">SHOP LAYOUT 3</a></li>
                      <li><a href="index-shop-4.html">SHOP LAYOUT 4</a></li>
                      <li><a href="index-shop-5.html">SHOP LAYOUT 5</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      HOME MAGAZINE
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="index-magazine-1.html">MAGAZINE LAYOUT 1</a></li>
                      <li><a href="index-magazine-2.html">MAGAZINE LAYOUT 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      HOME LANDING PAGE
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="index-landing-1.html">LANDING PAGE LAYOUT 1</a></li>
                      <li><a href="index-landing-2.html">LANDING PAGE LAYOUT 2</a></li>
                      <li><a href="index-landing-3.html">LANDING PAGE LAYOUT 3</a></li>
                      <li><a href="index-landing-4.html">LANDING PAGE LAYOUT 4</a></li>
                      <li><a href="index-landing-5.html">LANDING PAGE LAYOUT 5</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      HOME FULLSCREEN
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="index-fullscreen-revolution.html">FULLSCREEN - REVOLUTION</a></li>
                      <li><a href="index-fullscreen-youtube.html">FULLSCREEN - YOUTUBE</a></li>
                      <li><a href="index-fullscreen-local-video.html">FULLSCREEN - LOCAL VIDEO</a></li>
                      <li><a href="index-fullscreen-image.html">FULLSCREEN - IMAGE</a></li>
                      <li><a href="index-fullscreen-txt-rotator.html">FULLSCREEN - TEXT ROTATOR</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      HOME ONE PAGE
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="index-onepage-default.html">ONE PAGE - DEFAULT</a></li>
                      <li><a href="index-onepage-revolution.html">ONE PAGE - REVOLUTION</a></li>
                      <li><a href="index-onepage-image.html">ONE PAGE - IMAGE</a></li>
                      <li><a href="index-onepage-parallax.html">ONE PAGE - PARALLAX</a></li>
                      <li><a href="index-onepage-youtube.html">ONE PAGE - YOUTUBE</a></li>
                      <li><a href="index-onepage-text-rotator.html">ONE PAGE - TEXT ROTATOR</a></li>
                      <li><a href="start.html#onepage"><span className="label label-success pull-right">new</span> MORE LAYOUTS</a></li>
                    </ul>
                  </li>
                  <li className="divider" />
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      HOME - THEMATICS <i className="fa fa-heart margin-left-10" />
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="index-thematics-restaurant.html">HOME - RESTAURANT</a></li>
                      <li><a href="index-thematics-education.html">HOME - EDUCATION</a></li>
                      <li><a href="index-thematics-construction.html">HOME - CONSTRUCTION</a></li>
                      <li><a href="index-thematics-medical.html">HOME - MEDICAL</a></li>
                      <li><a href="index-thematics-church.html">HOME - CHURCH</a></li>
                      <li><a href="index-thematics-fashion.html">HOME - FASHION</a></li>
                      <li><a href="index-thematics-wedding.html">HOME - WEDDING</a></li>
                      <li><a href="index-thematics-events.html">HOME - EVENTS</a></li>
                      <li><a href="http://www.stepofweb.com/propose-design.html" data-toggle="tooltip" data-placement="top" title="Do you need a specific home design? We can include it in the next update!" target="_blank"><span className="label label-danger pull-right">hot</span> PROPOSE THEMATIC</a></li>
                    </ul>
                  </li>
                  <li className="divider" />
                  <li><a href="start.html#newrevslider" data-toggle="tooltip" data-placement="top" title="32 More Revolution Slider V5"><span className="label label-danger pull-right">new</span> 32 MORE LAYOUTS</a></li>
                  <li className="divider" />
                  <li><a href="index-simple-revolution.html">HOME SIMPLE - REVOLUTION</a></li>
                  <li><a href="index-simple-layerslider.html">HOME SIMPLE - LAYERSLIDER</a></li>
                  <li><a href="index-simple-parallax.html">HOME SIMPLE - PARALLAX</a></li>
                  <li><a href="index-simple-youtube.html">HOME SIMPLE - YOUTUBE</a></li>
                </ul>
              </li>
              <li className="dropdown active">{/* PAGES */}
                <a className="dropdown-toggle" href="#">
                  PAGES
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      ABOUT
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-about-us-1.html">ABOUT US - LAYOUT 1</a></li>
                      <li><a href="page-about-us-2.html">ABOUT US - LAYOUT 2</a></li>
                      <li><a href="page-about-us-3.html">ABOUT US - LAYOUT 3</a></li>
                      <li><a href="page-about-us-4.html">ABOUT US - LAYOUT 4</a></li>
                      <li><a href="page-about-us-5.html">ABOUT US - LAYOUT 5</a></li>
                      <li><a href="page-about-me-1.html">ABOUT ME - LAYOUT 1</a></li>
                      <li><a href="page-about-me-2.html">ABOUT ME - LAYOUT 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      TEAM
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-team-1.html">TEAM - LAYOUT 1</a></li>
                      <li><a href="page-team-2.html">TEAM - LAYOUT 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      SERVICES
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-services-1.html">SERVICES - LAYOUT 1</a></li>
                      <li><a href="page-services-2.html">SERVICES - LAYOUT 2</a></li>
                      <li><a href="page-services-3.html">SERVICES - LAYOUT 3</a></li>
                      <li><a href="page-services-4.html">SERVICES - LAYOUT 4</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      FAQ
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-faq-1.html">FAQ - LAYOUT 1</a></li>
                      <li><a href="page-faq-2.html">FAQ - LAYOUT 2</a></li>
                      <li><a href="page-faq-3.html">FAQ - LAYOUT 3</a></li>
                      <li><a href="page-faq-4.html">FAQ - LAYOUT 4</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      CONTACT
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-contact-1.html">CONTACT - LAYOUT 1</a></li>
                      <li><a href="page-contact-2.html">CONTACT - LAYOUT 2</a></li>
                      <li><a href="page-contact-3.html">CONTACT - LAYOUT 3</a></li>
                      <li><a href="page-contact-4.html">CONTACT - LAYOUT 4</a></li>
                      <li><a href="page-contact-5.html">CONTACT - LAYOUT 5</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      ERROR
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-404-1.html">ERROR 404 - LAYOUT 1</a></li>
                      <li><a href="page-404-2.html">ERROR 404 - LAYOUT 2</a></li>
                      <li><a href="page-404-3.html">ERROR 404 - LAYOUT 3</a></li>
                      <li><a href="page-404-4.html">ERROR 404 - LAYOUT 4</a></li>
                      <li><a href="page-404-5.html">ERROR 404 - LAYOUT 5</a></li>
                      <li><a href="page-404-6.html">ERROR 404 - LAYOUT 6</a></li>
                      <li><a href="page-404-7.html">ERROR 404 - LAYOUT 7</a></li>
                      <li><a href="page-404-8.html">ERROR 404 - LAYOUT 8</a></li>
                      <li className="divider" />
                      <li><a href="page-500-1.html">ERROR 500 - LAYOUT 1</a></li>
                      <li><a href="page-500-2.html">ERROR 500 - LAYOUT 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      SIDEBAR
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-sidebar-left.html">SIDEBAR LEFT</a></li>
                      <li><a href="page-sidebar-right.html">SIDEBAR RIGHT</a></li>
                      <li><a href="page-sidebar-both.html">SIDEBAR BOTH</a></li>
                      <li><a href="page-sidebar-no.html">NO SIDEBAR</a></li>
                      <li className="divider" />
                      <li><a href="page-sidebar-dark-left.html">SIDEBAR LEFT - DARK</a></li>
                      <li><a href="page-sidebar-dark-right.html">SIDEBAR RIGHT - DARK</a></li>
                      <li><a href="page-sidebar-dark-both.html">SIDEBAR BOTH - DARK</a></li>
                      <li><a href="page-sidebar-dark-no.html">NO SIDEBAR - DARK</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      LOGIN/REGISTER
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-login-1.html">LOGIN - LAYOUT 1</a></li>
                      <li><a href="page-login-2.html">LOGIN - LAYOUT 2</a></li>
                      <li><a href="page-login-3.html">LOGIN - LAYOUT 3</a></li>
                      <li><a href="page-login-4.html">LOGIN - LAYOUT 4</a></li>
                      <li><a href="page-login-5.html">LOGIN - LAYOUT 5</a></li>
                      <li><a href="page-login-register-1.html">LOGIN + REGISTER 1</a></li>
                      <li><a href="page-login-register-2.html">LOGIN + REGISTER 2</a></li>
                      <li><a href="page-login-register-3.html">LOGIN + REGISTER 3</a></li>
                      <li><a href="page-register-1.html">REGISTER - LAYOUT 1</a></li>
                      <li><a href="page-register-2.html">REGISTER - LAYOUT 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      CLIENTS
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-clients-1.html">CLIENTS 1 - SIDEBAR RIGHT</a></li>
                      <li><a href="page-clients-2.html">CLIENTS 1 - SIDEBAR LEFT</a></li>
                      <li><a href="page-clients-3.html">CLIENTS 1 - FULLWIDTH</a></li>
                      <li className="divider" />
                      <li><a href="page-clients-4.html">CLIENTS 2 - SIDEBAR RIGHT</a></li>
                      <li><a href="page-clients-5.html">CLIENTS 2 - SIDEBAR LEFT</a></li>
                      <li><a href="page-clients-6.html">CLIENTS 2 - FULLWIDTH</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      SEARCH RESULT
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-search-result-1.html">LAYOUT 1 - LEFT SIDEBAR</a></li>
                      <li><a href="page-search-result-2.html">LAYOUT 1 - RIGHT SIDEBAR</a></li>
                      <li><a href="page-search-result-3.html">LAYOUT 1 - FULLWIDTH</a></li>
                      <li className="divider" />
                      <li><a href="page-search-result-4.html">LAYOUT 2 - LEFT SIDEBAR</a></li>
                      <li><a href="page-search-result-5.html">LAYOUT 2 - RIGHT SIDEBAR</a></li>
                      <li className="divider" />
                      <li><a href="page-search-result-6.html">LAYOUT 3 - TABLE SEARCH</a></li>
                    </ul>
                  </li>
                  <li className="dropdown active">
                    <a className="dropdown-toggle" href="#">
                      PROFILE
                    </a>
                    <ul className="dropdown-menu">
                      <li className="active"><a href="page-profile.html">USER PROFILE</a></li>
                      <li><a href="page-profile-projects.html">USER PROJECTS</a></li>
                      <li><a href="page-profile-comments.html">USER COMMENTS</a></li>
                      <li><a href="page-profile-history.html">USER HISTORY</a></li>
                      <li><a href="page-profile-settings.html">USER SETTINGS</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      MAINTENANCE
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-maintenance-1.html">MAINTENANCE - LAYOUT 1</a></li>
                      <li><a href="page-maintenance-2.html">MAINTENANCE - LAYOUT 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      COMING SOON
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-coming-soon-1.html">COMING SOON - LAYOUT 1</a></li>
                      <li><a href="page-coming-soon-2.html">COMING SOON - LAYOUT 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      FORUM
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="page-forum-home.html">FORUM - HOME</a></li>
                      <li><a href="page-forum-topic.html">FORUM - TOPIC</a></li>
                      <li><a href="page-forum-post.html">FORUM - POST</a></li>
                    </ul>
                  </li>
                  <li><a href="page-careers.html">CAREERS</a></li>
                  <li><a href="page-sitemap.html">SITEMAP</a></li>
                  <li><a href="page-blank.html">BLANK PAGE</a></li>
                </ul>
              </li>
              <li className="dropdown">{/* BLOG */}
                <a className="dropdown-toggle" href="#">
                  BLOG
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      DEFAULT
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-default-aside-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="blog-default-aside-right.html">RIGHT SIDEBAR</a></li>
                      <li><a href="blog-default-aside-both.html">BOTH SIDEBAR</a></li>
                      <li><a href="blog-default-fullwidth.html">FULL WIDTH</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      GRID
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-column-2colums.html">2 COLUMNS</a></li>
                      <li><a href="blog-column-3colums.html">3 COLUMNS</a></li>
                      <li><a href="blog-column-4colums.html">4 COLUMNS</a></li>
                      <li className="divider" />
                      <li><a href="blog-column-aside-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="blog-column-aside-right.html">RIGHT SIDEBAR</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      MASONRY
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-masonry-2colums.html">2 COLUMNS</a></li>
                      <li><a href="blog-masonry-3colums.html">3 COLUMNS</a></li>
                      <li><a href="blog-masonry-4colums.html">4 COLUMNS</a></li>
                      <li><a href="blog-masonry-fullwidth.html">FULLWIDTH</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      TIMELINE
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-timeline-aside-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="blog-timeline-aside-right.html">RIGHT SIDEBAR</a></li>
                      <li><a href="blog-timeline-right-aside-right.html">RIGHT + TIMELINE RIGHT</a></li>
                      <li><a href="blog-timeline-right-aside-left.html">LEFT + TIMELINE RIGHT</a></li>
                      <li><a href="blog-timeline-fullwidth-left.html">FULL WIDTH - LEFT</a></li>
                      <li><a href="blog-timeline-fullwidth-right.html">FULL WIDTH - RIGHT</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      SMALL IMAGE
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-smallimg-aside-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="blog-smallimg-aside-right.html">RIGHT SIDEBAR</a></li>
                      <li><a href="blog-smallimg-aside-both.html">BOTH SIDEBAR</a></li>
                      <li><a href="blog-smallimg-fullwidth.html">FULL WIDTH</a></li>
                      <li className="divider" />
                      <li><a href="blog-smallimg-alternate-1.html">ALTERNATE 1</a></li>
                      <li><a href="blog-smallimg-alternate-2.html">ALTERNATE 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      SINGLE
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-single-default.html">DEFAULT</a></li>
                      <li><a href="blog-single-aside-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="blog-single-aside-right.html">RIGHT SIDEBAR</a></li>
                      <li><a href="blog-single-fullwidth.html">FULL WIDTH</a></li>
                      <li><a href="blog-single-small-image-left.html">SMALL IMAGE - LEFT</a></li>
                      <li><a href="blog-single-small-image-right.html">SMALL IMAGE - RIGHT</a></li>
                      <li><a href="blog-single-big-image.html">BIG IMAGE</a></li>
                      <li><a href="blog-single-fullwidth-image.html">FULLWIDTH IMAGE</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      COMMENTS
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-comments-bordered.html#comments">BORDERED COMMENTS</a></li>
                      <li><a href="blog-comments-default.html#comments">DEFAULT COMMENTS</a></li>
                      <li><a href="blog-comments-facebook.html#comments">FACEBOOK COMMENTS</a></li>
                      <li><a href="blog-comments-disqus.html#comments">DISQUS COMMENTS</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">{/* SHOP */}
                <a className="dropdown-toggle" href="#">
                  SHOP
                </a>
                <ul className="dropdown-menu pull-right">
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      1 COLUMN
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="shop-1col-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="shop-1col-right.html">RIGHT SIDEBAR</a></li>
                      <li><a href="shop-1col-both.html">BOTH SIDEBAR</a></li>
                      <li><a href="shop-1col-full.html">FULL WIDTH</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      2 COLUMNS
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="shop-2col-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="shop-2col-right.html">RIGHT SIDEBAR</a></li>
                      <li><a href="shop-2col-both.html">BOTH SIDEBAR</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      3 COLUMNS
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="shop-3col-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="shop-3col-right.html">RIGHT SIDEBAR</a></li>
                      <li><a href="shop-3col-full.html">FULL WIDTH</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      4 COLUMNS
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="shop-4col-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="shop-4col-right.html">RIGHT SIDEBAR</a></li>
                      <li><a href="shop-4col-full.html">FULL WIDTH</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#">
                      SINGLE PRODUCT
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="shop-single-left.html">LEFT SIDEBAR</a></li>
                      <li><a href="shop-single-right.html">RIGHT SIDEBAR</a></li>
                      <li><a href="shop-single-both.html">BOTH SIDEBAR</a></li>
                      <li><a href="shop-single-full.html">FULL WIDTH</a></li>
                    </ul>
                  </li>
                  <li><a href="shop-compare.html">COMPARE</a></li>
                  <li><a href="shop-cart.html">CART</a></li>
                  <li><a href="shop-checkout.html">CHECKOUT</a></li>
                  <li><a href="shop-checkout-final.html">ORDER PLACED</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
};
// Logout.defaultProps = {};

export default Header;
