import React from 'react';
import merge from 'lodash/merge';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_name: this.props.currentUser.username,
      author_id: this.props.currentUser.id,
      chatroom_id: this.props.ownProps.location.pathname.slice(11),
    };

    this.renderMessages = this.renderMessages.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    this.props.requestMessages(this.state.chatroom_id);
    this.scrollToBottom();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.chatroomsId !== nextProps.match.params.chatroomsId) {
      this.props.requestMessages(nextProps.match.params.chatroomsId);
    }
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
        author_name: this.props.currentUser.username,
        chatroom_id: this.props.ownProps.location.pathname.slice(11),
      };
      this.state.body = "";
      const message = merge({}, placeholder);
      this.props.requestCreateMessage( { message } );
    }

  update(prop) {
    return e => this.setState({[prop]: e.currentTarget.value});
  }

  scrollToBottom () {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    if (node) {
      node.scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  renderMessages() {
    if (this.props.messages.length > 0) {
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
                  <button className="message_delete_button" onClick={ this.handleClick(message.id) }>Delete</button>
                </div>
              </div>
            </li>

          </div>
        );
      });
      return (

          <ul className="messages_scroller">
            { messageList }
            <div className="dummy_message" ref={(el) => { this.messagesEnd = el; }}>

            </div>
          </ul>

      );
    } else {
      return (
        <div className="empty">
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="home_header">
          <div className="welcome">
            Welcome {this.props.currentUser.username}
          </div>
        </div>
        {this.renderMessages()}

        <div className="message_container">
          <form className='message_form' onSubmit={this.handleSubmit}>
              <input placeholder="hallo" className="message_input" type='text'
                value={ this.state.body }
                onChange={this.update('body')} />
          </form>
        </div>

      </div>
    );
  }

}


export default Message;
