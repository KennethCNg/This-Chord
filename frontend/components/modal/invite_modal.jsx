import React from 'react';
import { connect } from 'react-redux';

class InviteModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var placeholder = {
      name: this.state.name,
    };
    this.state.name = "";
    this.props.handleClose();
    const chatroom = Object.assign({}, placeholder);
    this.props.requestCreateChatroom( { chatroom } );
  }

  update(prop) {
    return e => this.setState({[prop]: e.currentTarget.value});
  }

  errors() {
    if (this.props.errors) {
      const errorList = this.props.errors.map((error, idx) => {
        return (
          <li key={`error-${idx}`}>
            { error }
          </li>
        );
      });
      return (
        <ul className="session-errors">
          { errorList }
        </ul>
        );
    }
  }

  render() {
    if (this.props.isInviteOpen && this.props.pathname !== "/") {
        return (
          <div className="modal_backdrop" onClick={ this.props.handleClose }>
            <div className="modal_invite">

              <div className="invite_form_header">
                <header className="invite_header">
                  Invite People to { this.props.chatroomName[0].name }
                </header>
                <div className="invite_div">
                  Share this link with others to grant access to this server
                </div>
              </div>

                <div className="share_link">
                  this-chord.herokuapp.com:
                  { this.props.location.pathname }
                </div>


            </div>
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
      isOpen: ownProps.isInviteOpen,
      handleClose: ownProps.handleClose,
      pathname: ownProps.pathname,
      chatroomName: ownProps.chatroomName,
      chatroomId: ownProps.chatroomId,
  };
};

const MapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(InviteModal);
