import React from 'react';

function Slidetop() {
  return (
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
  );
}
// Slidetop.propTypes = {};
// Logout.defaultProps = {};

export default Slidetop;
