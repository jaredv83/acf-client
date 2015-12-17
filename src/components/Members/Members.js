import React, { Component } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import MembersPreview from './MembersPreview'
import masonry from 'react-masonry-component'
const Masonry = masonry(React)

const masonryOptions = {
  containerStyle: {
    visibility: 'visible',
  },
}

class Members extends Component {

  render() {
    const { members, hasLess, hasMore, pageIndex } = this.props

    return (
      <div className="container">
        <h1>Members</h1>
        <Masonry
            className={'row masonry'} // default ''
            elementType={'div'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
        >
          {
            members.map((member) => {
              return (
                <MembersPreview key={member.slug} {...member} />
              )
            })
          }
        </Masonry>
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
                    evt.preventDefault()
                    return false
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
                    evt.preventDefault()
                    return false
                  }
                }}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

Members.propTypes = {
  hasLess: React.PropTypes.bool,
  hasMore: React.PropTypes.bool,
  members: React.PropTypes.array,
  pageIndex: React.PropTypes.number,
}

export default Members
