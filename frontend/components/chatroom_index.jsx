import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import { Chatroom } from './chatroom';
import { selectChatrooms  } from './selector';
import { requestDestroyChatroom } from '../actions/chatroom_actions';


class ChatroomIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderInvite = this.renderInvite.bind(this);
  }


  handleClick(chatroomId) {
    return (e) => {
      e.preventDefault();
      this.props.requestDestroyChatroom(chatroomId);
    };
  }

  renderInvite() {
    if (this.props.location.pathname !== "/") {
      return (
        <div className="share">
          <div className="share_invite">
            Invite Your Friends!
          </div>
          <div className="share_link">
            this-chord.herokuapp.com:
            <br/>
            { this.props.location.pathname }
          </div>
        </div>
    );
    } else {
        return (
          null
        );
      }
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
            <div>

              <ul className="chatroom_index">
                { this.renderInvite() }
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
