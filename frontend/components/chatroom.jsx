import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatroomIndex from './chatroom_index';
import MessageContainer from './message_container';
import ChatroomModal from './chatroom_modal';
import InviteModal from './invite_modal';
import { isEmpty } from 'lodash';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.requestAllChatrooms();
    if ( isEmpty(this.props.currentUser.chatroom) ) {
      debugger;
      this.handleClick();
    } else {
      this.props.history.push(`/chatrooms/${this.props.currentUser.chatroom.id}`);
    }
  }

  handleClick() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }


  render() {
    return (
      <div>
        <div className="thischord" />
      <div>

        <div className="channel_text_and_button">
          <div className="channel_text">
            CHANNELS
          </div>
          <div className="channel-btns">


            <button onClick={ this.handleClick } className="channel_button">
              +
            </button>
          </div>

        </div>

        <ChatroomIndex chatrooms={this.props.chatrooms} currentUser={this.props.currentUser}/>
      </div>

        <ChatroomModal
          isOpen={this.state.modalOpen}
          handleClose={this.handleClick}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}





export default withRouter(Chatroom);
