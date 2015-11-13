import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import MembersPreview from './MembersPreview';

class Members extends Component {

  render() {
    const { members } = this.props;

    return (
      <div className="container">
        <h1>Members</h1>
        <DocumentMeta title="CAPE: Members" />
        <div className="row">
        {
          members.map((member) => {
            return (
              <MembersPreview key={member.slug} {...member} />
            );
          })
        }
        </div>
      </div>
    );
  }
}

Members.propTypes = {
  members: React.PropTypes.array,
};

export default Members;
