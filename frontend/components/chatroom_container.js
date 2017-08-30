import { connect } from 'react-redux';
import Chatroom from './chatroom';
import { requestAllChatrooms } from '../actions/chatroom_actions';
import { selectChatrooms } from './selector';

const mapStateToProps = state => {
  return {
    chatrooms: state.entities.chatrooms,

    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllChatrooms: () => dispatch(requestAllChatrooms()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
