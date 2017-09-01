import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Home from './home';
import { requestCreateMessage } from '../actions/message_actions';
import { requestAllUsers } from '../actions/user_actions';
import { selectUsers } from './selector';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    users: selectUsers(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLogout: () => dispatch(logout()),
    requestAllUsers: () => dispatch(requestAllUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
