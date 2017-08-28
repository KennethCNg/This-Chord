import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatroomIndex from './chatroom_index';
import MessageContainer from './message_container';
import ChatroomModal from './chatroom_modal';

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
  }

  handleClick() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>+</button>
        <ChatroomIndex chatrooms={this.props.chatrooms} />
        <ChatroomModal
          isOpen={this.state.modalOpen}
          handleClose={this.handleClick}
          currentUser={this.props.currentUser}/>
      </div>
    );
  }
}





export default withRouter(Chatroom);
