import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

export default class About extends Component {

  render() {
    return (
      <div className="container">
        <h1>About Us</h1>
        <DocumentMeta title="CAPE: About Us"/>

        <p>The American Composers Forum enriches lives by nurturing the creative spirit of composers and communities. We provide new opportunities for composers and their music to flourish, and engage communities in the creation, performance and enjoyment of new music.</p>

      </div>
    );
  }
}
