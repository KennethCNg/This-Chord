import React from 'react';
import { connect } from 'react-redux';
import { requestCreateDM } from '../actions/direct_message_actions';
import { selectUsers } from './selector';


class DMModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: [this.props.currentUser.username],
      member_ids: [this.props.currentUser.id],
      highlight: "active",
    };
    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var placeholder = {
      name: this.state.name.join(", "),
      member_ids: this.state.member_ids,
    };
    this.state.name = [];
    this.props.handleClose();
    const membership = Object.assign({}, placeholder);
    this.props.requestCreateDM( { membership } );
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

  selectUser(userId, username) {
    if ( (this.state.member_ids.includes(userId)) ) {
      this.setState({
          name: this.state.name.filter(name => name !== username),
          member_ids: this.state.member_ids.filter(id => id !== userId),
      });

    } else {
      this.setState({
        name: this.state.name.concat(username),
        member_ids: this.state.member_ids.concat(userId),
      });
    }
  }



  renderUsers() {
    const self = this;
    if (this.props.users.length > 0) {
      const usersIndex = this.props.users.map((user, idx) => {
        if (user.id !== self.props.currentUser.id) {
          const selected = this.state.member_ids.includes(user.id);
          return (
            <li
              key={`dm-li-${user.id}`}
              className={ selected ? "activate" : "" }
              onClick={ this.selectUser.bind(this, user.id, user.username) }
              >
              { user.username }
            </li>
          );
        }
    });
    return (
      <ul className="dm_index">
        { usersIndex }
      </ul>
    );
    } else {
      return (
        null
    );
    }
  }

  render() {
    if (this.props.isOpen) {
      return (
      <div className="modal_backdrop" onClick={ this.props.handleClose }>
        <div className="modal">

          <form onSubmit={ this.handleSubmit } onClick={(e) => e.stopPropagation()}>
            <div className="modal_wrapper">
              <div className="modal_header">
                START A PRIVATE CONVERSATION
              </div>
              <div className="modal_form_wrapper">
                <div className="modal_input_name">
                  CHANNEL NAME
                </div>

                <div className="fake_form">
                  <div className="fake_form_input">
                    { this.state.name.join(", ") }
                  </div>
                </div>

              </div>
            </div>

            <div className="selector_button_wrapper">
              <div className="user_selection_wrapper">
                <div className="user_selection_header">
                  Users
                </div>
                <div>
              { this.renderUsers() }
              </div>
              </div>

              <div className="modal_buttons">

                <button
                  onClick={this.props.handleClose}
                  className="modal_cancel_button">
                  Cancel
                </button>

                <button
                  className="modal_create_button">
                  Send Message
                </button>

              </div>
            </div>

          </form>
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
      isOpen: ownProps.isOpen,
      handleClose: ownProps.handleClose,
      currentUser: state.session.currentUser,
      users: selectUsers(state),
  };
};

const MapDispatchToProps = dispatch => {
  return {
    requestCreateDM: (dm) => dispatch(requestCreateDM(dm)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(DMModal);
