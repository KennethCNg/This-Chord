import React from 'react';
import { connect } from 'react-redux';
import { requestCreateChatroom } from '../actions/chatroom_actions';


class ChatroomModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      admin_id: this.props.currentUser.id,
      author: this.props.currentUser.username,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var placeholder = {
      name: this.state.name,
      admin_id: this.state.admin_id,
      author: this.state.author,
    };
    this.state.name = "";
    this.props.handleClose();
    const chatroom = Object.assign({}, placeholder);
    this.props.requestCreateChatroom( { chatroom } );
  }

  update(prop) {
    return e => this.setState({[prop]: e.currentTarget.value});
  }

  render() {
    if (this.props.isOpen) {
      return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input required type='text'
            value={ this.state.name }
            onChange={this.update('name')} />
          <button>Create Channel</button>
        </form>
        <button onClick={this.props.handleClose}>Cancel</button>
      </div>
      );
    } else {
      return (
        null
      );
    }
  }
}

const MapStateToProps = ( state, ownProps ) => {
  return {
      isOpen: ownProps.isOpen,
      handleClose: ownProps.handleClose,
      currentUser: state.session.currentUser,

  };
};

const MapDispatchToProps = dispatch => {
  return {
    requestCreateChatroom: (chatroom) => dispatch(requestCreateChatroom(chatroom)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(ChatroomModal);
