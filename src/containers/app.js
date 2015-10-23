import { connect } from 'react-redux';
import Component from '../components/App/App';
import { pushState } from 'redux-router';


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

export default connect(mapStateToProps, mapDispatchToProps)(Component);
