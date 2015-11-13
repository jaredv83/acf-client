import { connect } from 'react-redux';
import Component from 'components/Members/Members';
import { getPagerInfo } from '../helpers/pager';

function mapStateToProps({members: {data}, router: { location: { query } }}) {
  const page = query && query.page;
  // Filter down the members.
  const {list, hasMore, hasLess} = getPagerInfo(data, {pageIndex: page});
  return {
    members: list,
    hasLess,
    hasMore,
  };
}

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Component);
