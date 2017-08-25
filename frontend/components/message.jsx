import React from 'react';
import merge from 'lodash/merge';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };

    this.renderMessages = this.renderMessages.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
      e.preventDefault();
      var placeholder = {
        body: this.state.body,
        author_id: this.props.currentUserId,
        chatroom_id: this.props.chatroomId,
      };
      this.state.body = "";
      const message = merge({}, placeholder);
      this.props.requestCreateMessage( {message} );
    }

  update(prop) {
    return e => this.setState({[prop]: e.currentTarget.value});
  }

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
          <ul>
            { messageList }
          </ul>
      </div>
      );
    }
  }

  render() {
    return (
      <div>


          <div>
            {this.renderMessages()}
          </div>

            <form className='message_form' onSubmit={this.handleSubmit}>

              <div>
                <input required className="message_input" type='text'
                value={ this.state.body }
                onChange={this.update('body')} />
              </div>

          </form>

      </div>
    );
  }

}


export default Message;
