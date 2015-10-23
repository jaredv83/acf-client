import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

export default class About extends Component {

  render() {
    return (
      <div className="container">
        <h1>Members</h1>
        <DocumentMeta title="CAPE: Members"/>

        <p>Some membership directory thing.</p>

      </div>
    );
  }
}
