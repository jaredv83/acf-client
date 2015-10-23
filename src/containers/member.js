import { connect } from 'react-redux';
import Component from 'components/Members/MemberDetail';
import find from 'lodash.find';

function mapStateToProps({members: { data }, router: { params }}) {
  const member = find(data, {slug: params.id});
  return {
    ...member,
  };
}

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Component);
