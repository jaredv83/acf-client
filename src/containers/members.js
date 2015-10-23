import { connect } from 'react-redux';
import Component from 'components/Members/Members';


function mapStateToProps({members: {data}}) {
  return {
    members: data,
  };
}

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Component);
