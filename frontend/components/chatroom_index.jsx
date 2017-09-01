import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router';
import { Link, NavLink } from 'react-router-dom';
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
              <NavLink
                key={`chatroom-nav-${chatroom.id}`}
                to={`/chatrooms/${chatroom.id}`}
                activeClassName="banana"
              >
                <li
                  className="chatroom_index_item"
                  key={`chatroom-li-${chatroom.id}`}>
                  <div
                    className="chatroom_name"
                    key={`chatroom-div-${chatroom.id}`}>
                    # {chatroom.name}
                  </div>
                {chatroom.admin_id === this.props.currentUser.id &&
                <button
                  key={`chatroom-delete-button-${chatroom.id}`}
                  type="submit"
                  className="chatroom_delete_button"
                  onClick={ this.handleClick(chatroom.id) }>
                  X
                </button>
                  }
                </li>
              </NavLink>
            );
          });
          return (
            <div>
              <ul className="chatroom_index">
                { chatroomIndexItems }
              </ul>
            </div>
          );
        } else {
          return (
            null
          );
        }
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    chatrooms: selectChatrooms(state),
    currentUser: ownProps.currentUser,
    ownProps,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestDestroyChatroom: (chatroomId) => dispatch(requestDestroyChatroom(chatroomId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatroomIndex));
