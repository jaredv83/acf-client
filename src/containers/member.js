import { connect } from 'react-redux'
import Component from '../components/Members/MemberDetail'

function mapStateToProps(state, ownProps) {
  const {
    entities: { member },
    twitter,
  } = state
  const { id } = ownProps.params || {}

  const memberData = member ? member[id] : {}
  return {
    ...memberData,
    twitter: twitter && twitter.data,
  }
}

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(Component)
