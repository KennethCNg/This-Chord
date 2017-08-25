import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);


    this.renderMessages = this.renderMessages.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestAllMessages();
  }

  handleClick(messageid) {
    return (e) => {
      e.preventDefault();
      this.props.requestDeleteMessage(messageid);
    };
  }

  // handleEnter(message) {
  //   return (e) => {
  //     e.preventDefault();
  //     this.props.requestCreateMessage(body: "");
  //   };
  // }



  renderMessages() {
    if (this.props.messages) {
      const messageList = this.props.messages.map((message, idx) => {
        return (
          <li key={`message-${idx}`}>
            { message.body }
            <button onClick={ this.handleClick(message.id) }>Delete</button>
          </li>
        );
      });
      return (
      <div>
        <div>
          <ul>
            { messageList }
          </ul>
        </div>
      </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderMessages()}
        <div>

        </div>
      </div>
    );
  }

}


export default Message;
