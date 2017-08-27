import React from 'react';
import merge from 'lodash/merge';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_name: this.props.username,
    };

    this.renderMessages = this.renderMessages.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    this.props.requestAllMessages();
    this.scrollToBottom();
  }

  componentWillReceiveProps() {
    this.scrollToBottom();
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

  scrollToBottom () {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  renderMessages() {
    if (this.props.messages) {
      const messageList = this.props.messages.map((message, idx) => {
        return (
          <div key= {`message-div-${idx}`}className="messages">
            <li key={`message-li-${idx}`}  className="message">
              <div key= {`message-body-${idx}`} className="message_body">
                { message.body }
              </div>

              <div key= {`message-button-${idx}`} className="message_button">
                <button onClick={ this.handleClick(message.id) }>Delete</button>
            </div>
            </li>

          </div>
        );
      });
      return (
      <div>
          <ul className="messages_scroller">
            { messageList }
            <div className="dummy_message" ref={(el) => { this.messagesEnd = el; }}>
                bottom
            </div>
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
