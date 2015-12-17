import { connect } from 'react-redux'
import values from 'lodash/object/values'
import Component from '../components/Members/Members'
import { getPagerInfo } from '../helpers/pager'

function mapStateToProps(state, ownProps) {
  const {
    entities: { member },
  } = state
  const { query } = ownProps.location || {}
  const page = query.page && parseInt(query.page, 10)
  // Filter down the members.
  const data = values(member)
  const { list, hasMore, hasLess, pageIndex, totalItems } = getPagerInfo(data, { page })
  return {
    members: list,
    hasLess,
    hasMore,
    pageIndex,
    totalItems,
  }
}

// const mapDispatchToProps = {
//   handleNext:
// }

export default connect(mapStateToProps)(Component)
