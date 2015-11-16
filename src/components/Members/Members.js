import React, { Component } from 'react';
import {Link} from 'react-router';
import DocumentMeta from 'react-document-meta';
import classnames from 'classnames';
import MembersPreview from './MembersPreview';

class Members extends Component {

  render() {
    const { members, hasLess, hasMore, pageIndex } = this.props;

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
        <nav>
          <ul className="pager">
            <li className={classnames({
              previous: true,
              disabled: !hasLess,
            })}>
              <Link
                to={`/members?page=${pageIndex - 1}`}
                onClick={(evt) => {
                  if (!hasLess) {
                    evt.preventDefault();
                    return false;
                  }
                }}
              >
                Previous
              </Link>
            </li>
            <li className={classnames({
              next: true,
              disabled: !hasMore,
            })}>
              <Link
                to={`/members?page=${pageIndex + 1}`}
                onClick={(evt) => {
                  if (!hasMore) {
                    evt.preventDefault();
                    return false;
                  }
                }}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Members.propTypes = {
  hasLess: React.PropTypes.bool,
  hasMore: React.PropTypes.bool,
  members: React.PropTypes.array,
};

export default Members;
