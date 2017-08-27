import React from 'react';
class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.renderChatrooms = this.renderChatrooms.bind(this);
  }
  componentDidMount() {
    this.props.requestAllChatrooms();
  }

  renderChatrooms() {
    if (this.props.chatrooms) {
      const chatroomList = this.props.chatrooms.map((chatroom, idx) => {
        return (
          <div key={`chatroom-div-${idx}`}>
            <li key={`chatroom-li-${idx}`}>
              { chatroom.name }
            </li>
          </div>
        );
      });
      return(
        <div className="chatroomList">
          <ul>
            { chatroomList }
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderChatrooms()}
        test3
      </div>
    );
  }
}





export default Chatroom;
