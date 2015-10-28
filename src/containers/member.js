import { connect } from 'react-redux';
import Component from 'components/Members/MemberDetail';
import find from 'lodash.find';

function mapStateToProps({ members: { data }, router: { params }, twitter }) {
  const member = find(data, {slug: params.id});
  return {
    ...member,
    twitter: twitter && twitter.data,
  };
}

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Component);
