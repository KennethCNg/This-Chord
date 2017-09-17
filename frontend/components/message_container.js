import { connect } from 'react-redux';
import Message from './message';
import { requestCreateMessage, requestDeleteMessage } from '../actions/message_actions';
import { requestChatroomMessages } from '../actions/chatroom_actions';
import { selectMessages  } from './selector';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    messages: selectMessages(state),
    currentUser: state.session.currentUser,
    chatrooms: state.entities.chatrooms,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestMessages: (chatroomId) => dispatch(requestChatroomMessages(chatroomId)),
    requestDeleteMessage: (messageid) => dispatch(requestDeleteMessage(messageid)),
    requestCreateMessage: (message) => dispatch(requestCreateMessage(message)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
