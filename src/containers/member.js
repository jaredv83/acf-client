import { connect } from 'react-redux';
import Component from 'components/Members/MemberDetail';


function mapStateToProps({members: {data}}) {
  return {
    members: data,
  };
}

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Component);
