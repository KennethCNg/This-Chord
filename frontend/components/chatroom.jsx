import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatroomIndex from './chatroom_index';
import MessageContainer from './message_container';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.requestAllChatrooms();
  }

  render() {
    return (
      <div>
        <ChatroomIndex chatrooms={this.props.chatrooms}/>
      </div>
    );
  }
}





export default withRouter(Chatroom);
