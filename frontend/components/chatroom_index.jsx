import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Chatroom } from './chatroom';
import { selectChatrooms  } from './selector';
import { requestDestroyChatroom } from '../actions/chatroom_actions';


class ChatroomIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(chatroomId) {
    return (e) => {
      e.preventDefault();
      this.props.requestDestroyChatroom(chatroomId);
    };
  }

  render() {
        if (this.props.chatrooms.length > 0) {
          const chatroomIndexItems = this.props.chatrooms.map((chatroom, idx) => {
            return (
                <li className="chatroom_index_item" key={`chatroom-${idx}`}>
                  <Link to={`/chatrooms/${chatroom.id}`}>
                    <div className="chatroom_name">
                      {chatroom.name}
                    </div>
                  </Link>
                    <button type="submit" className="chatroom_delete_button" onClick={ this.handleClick(chatroom.id) }>Delete</button>
                </li>
            );
          });
          return (
            <ul className="chatroom_index">
              { chatroomIndexItems }
            </ul>
          );
        } else {
          return (
            null
          );
        }
  }

}

const mapStateToProps = state => {
  return {
    chatrooms: selectChatrooms(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestDestroyChatroom: (chatroomId) => dispatch(requestDestroyChatroom(chatroomId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatroomIndex);