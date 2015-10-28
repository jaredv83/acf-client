import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {/* Footer Logo */}
            <img className="footer-logo" src="/images/logo-footer.png" alt />
            {/* Small Description */}
            <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
            {/* Contact Address */}
            <address>
              <ul className="list-unstyled">
                <li className="footer-sprite address">
                  PO Box 21132<br />
                  Here Weare St, Melbourne<br />
                  Vivas 2355 Australia<br />
                </li>
                <li className="footer-sprite phone">
                  Phone: 1-800-565-2390
                </li>
                <li className="footer-sprite email">
                  <a href="mailto:support@yourname.com">support@yourname.com</a>
                </li>
              </ul>
            </address>
            {/* /Contact Address */}
          </div>
          <div className="col-md-3">
            {/* Latest Blog Post */}
            <h4 className="letter-spacing-1">LATEST NEWS</h4>
            <ul className="footer-posts list-unstyled">
              <li>
                <a href="#">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue</a>
                <small>29 June 2015</small>
              </li>
              <li>
                <a href="#">Nullam id dolor id nibh ultricies</a>
                <small>29 June 2015</small>
              </li>
              <li>
                <a href="#">Duis mollis, est non commodo luctus</a>
                <small>29 June 2015</small>
              </li>
            </ul>
            {/* /Latest Blog Post */}
          </div>
          <div className="col-md-2">
            {/* Links */}
            <h4 className="letter-spacing-1">EXPLORE SMARTY</h4>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Our Clients</a></li>
              <li><a href="#">Our Pricing</a></li>
              <li><a href="#">Smarty Tour</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            {/* /Links */}
          </div>
          <div className="col-md-4">
            {/* Newsletter Form */}
            <h4 className="letter-spacing-1">KEEP IN TOUCH</h4>
            <p>Subscribe to Our Newsletter to get Important News &amp; Offers</p>
            <form className="validate" action="php/newsletter.php" method="post" data-success="Subscribed! Thank you!" data-toastr-position="bottom-right">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                <input type="email" id="email" name="email" className="form-control required" placeholder="Enter your Email" />
                <span className="input-group-btn">
                  <button className="btn btn-success" type="submit">Subscribe</button>
                </span>
              </div>
            </form>
            {/* /Newsletter Form */}
            {/* Social Icons */}
            <div className="margin-top-20">
              <a href="#" className="social-icon social-icon-border social-facebook pull-left" data-toggle="tooltip" data-placement="top" title="Facebook">
                <i className="icon-facebook" />
                <i className="icon-facebook" />
              </a>
              <a href="#" className="social-icon social-icon-border social-twitter pull-left" data-toggle="tooltip" data-placement="top" title="Twitter">
                <i className="icon-twitter" />
                <i className="icon-twitter" />
              </a>
              <a href="#" className="social-icon social-icon-border social-gplus pull-left" data-toggle="tooltip" data-placement="top" title="Google plus">
                <i className="icon-gplus" />
                <i className="icon-gplus" />
              </a>
              <a href="#" className="social-icon social-icon-border social-linkedin pull-left" data-toggle="tooltip" data-placement="top" title="Linkedin">
                <i className="icon-linkedin" />
                <i className="icon-linkedin" />
              </a>
              <a href="#" className="social-icon social-icon-border social-rss pull-left" data-toggle="tooltip" data-placement="top" title="Rss">
                <i className="icon-rss" />
                <i className="icon-rss" />
              </a>
            </div>
            {/* /Social Icons */}
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <ul className="pull-right nomargin list-inline mobile-block">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li>•</li>
            <li><a href="#">Privacy</a></li>
          </ul>
          © All Rights Reserved, Company LTD
        </div>
      </div>
    </footer>
  );
}
Footer.propTypes = {};
// Logout.defaultProps = {};

export default Footer;
