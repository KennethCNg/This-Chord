/* globals Pusher */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { Chatroom } from './chatroom';
import { selectChatrooms  } from './selector';
import { requestDestroyChatroom } from '../actions/chatroom_actions';
import InviteModal from './invite_modal';


class ChatroomIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalInviteOpen: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  isModalOpen(id) {
    return id === this.state.modalInviteOpen;
  }

  closeModal(e) {
    this.setState({
      modalInviteOpen: null,
    });
  }

  openModal(id) {
    return (e) => {
      e.stopPropagation();
      this.setState({
        modalInviteOpen: id,
      });
    };
  }

  handleClick(chatroomId) {
    return (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.props.history.push(`/chatrooms/${this.props.chatrooms[0].id}`);
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

                  {/*<button onClick={ this.openModal(chatroom.id)} className="channel_gear">
                    Gear
                  </button>*/}

                  <InviteModal
                    isInviteOpen={this.isModalOpen(chatroom.id)}
                    handleClose={this.closeModal}
                    location={this.props.location}
                    pathname={this.props.location.pathname}
                    chatroomName={ this.props.chatrooms }
                    />

                  {(chatroom.admin_id === this.props.currentUser.id) &&
                  <button
                    key={`chatroom-delete-button-${chatroom.id}`}
                    type="submit"
                    className="chatroom_delete_button"
                    onClick={ this.handleClick(chatroom.id)}>
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
