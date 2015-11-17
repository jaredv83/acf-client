import { connect } from 'react-redux';
import Component from '../components/App/App';
import { pushState } from 'redux-router';
import connectData from '../helpers/connectData';
import { isLoaded as isMembersLoaded, load as loadMembers } from 'redux/modules/members';
import { isLoaded as isTwitterLoaded, load as loadTwitter } from 'redux/modules/twitter';

function fetchData(getState, dispatch) {
  const promises = [];
  const state = getState();
  if (!isMembersLoaded(state)) {
    promises.push(dispatch(loadMembers()));
  }
  if (!isTwitterLoaded(state)) {
    promises.push(dispatch(loadTwitter()));
  }
  return Promise.all(promises);
}

function mapStateToProps({db: {navLinks, support, title, image, description}}) {
  return {
    description,
    image,
    navLinks,
    support,
    title,
  };
}

const mapDispatchToProps = {
  pushState,
};

const ConnectComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
export default connectData(fetchData)(ConnectComponent);
