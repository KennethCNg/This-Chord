import { connect } from 'react-redux';
import Message from './message';
import { requestCreateMessage, requestAllMessages, requestDeleteMessage } from '../actions/message_actions';
import { selectMessages  } from './selector';

const mapStateToProps = state => {
  return {
    messages: selectMessages(state),
    currentUserId: state.session.currentUser.id,
    chatroomId: 1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllMessages: () => dispatch(requestAllMessages()),
    requestDeleteMessage: (messageid) => dispatch(requestDeleteMessage(messageid)),
    requestCreateMessage: (message) => dispatch(requestCreateMessage(message)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
