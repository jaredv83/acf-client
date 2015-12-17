import React, { Component } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import masonry from 'react-masonry-component'
const Masonry = masonry(React)
import MembersPreview from './MembersPreview'
import Loading from '../Loading'

const masonryOptions = {
  containerStyle: {
    visibility: 'visible',
  },
}

class Members extends Component {

  render() {
    const { members, hasLess, hasMore, pageIndex, totalItems } = this.props
    if (totalItems === 0) {
      return (
        <div className="container">
          <Loading message={`Loading members...`} />
        </div>
      )
    }
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
  totalItems: React.PropTypes.number,
}

export default Members
