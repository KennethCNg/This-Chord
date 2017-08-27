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
        author_id: this.props.currentUser.id,
        chatroom_id: this.props.chatroomId,
        author_name: this.props.currentUser.username,
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
          <div key={`message-div-${idx}`} className="messages">
            <li key={`message-li-${idx}`}  className="message">

              <div key={`message-author-date-${idx}`} className="message_author_date">
                <div className="icon">Icon</div>
                <div key={`message-author-${idx}`} className="message_author">
                  { message.author_name }
                </div>
                <div key={`message-date-${idx}`} className="message_date">
                  { message.created_at }
                </div>
              </div>

              <div key={`message-body-button-${idx}`} className="message_body_button">
                <div key={`message-body-${idx}`} className="message_body">
                  { message.body }
                </div>

                <div key= {`message-button-${idx}`} className="message_button">
                  <button onClick={ this.handleClick(message.id) }>Delete</button>
                </div>
              </div>
            </li>

          </div>
        );
      });
      return (
      <div className="outer_message_scroller">
          <ul className="inner_messages_scroller">
            { messageList }
            <div className="dummy_message" ref={(el) => { this.messagesEnd = el; }}>
                {/*bottom*/}
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
                <div className="message_input_placeholder"></div>
                <input placeholder="Hallo" className="message_input" type='text'
                value={ this.state.body }
                onChange={this.update('body')} />
              </div>

          </form>

      </div>
    );
  }

}


export default Message;
