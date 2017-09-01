import { connect } from 'react-redux';
import DMMessage from './dm_message';
import { requestCreateMessage, requestDeleteMessage } from '../actions/message_actions';
import { requestChatroomMessages } from '../actions/chatroom_actions';
import { selectMessages  } from './selector';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    messages: selectMessages(state),
    currentUser: state.session.currentUser,
    chatrooms: state.entities.directMessages,
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
)(DMMessage);
