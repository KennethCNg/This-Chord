import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Home from './home';
import { requestCreateMessage } from '../../actions/message_actions';
import { requestAllUsers } from '../../actions/user_actions';
import { requestAllChatrooms } from '../../actions/chatroom_actions';
import { selectUsers, selectChatrooms, selectDMs } from '../../selector';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    users: selectUsers(state),
    chatrooms: selectChatrooms(state),
    directMessages: selectDMs(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLogout: () => dispatch(logout()),
    requestAllUsers: () => dispatch(requestAllUsers()),
    requestAllChatrooms: () => dispatch(requestAllChatrooms()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
