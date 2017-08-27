import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatroomIndexItem from './chatroom_index_item';
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
        <ul>
          { this.props.chatrooms.map ( chatroom =>
            <ChatroomIndexItem key={chatroom.id} chatroom={chatroom} />)}
        </ul>

      </div>
    );
  }
}





export default withRouter(Chatroom);
