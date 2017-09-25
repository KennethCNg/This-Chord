import React from 'react';
import merge from 'lodash/merge';
import { editUser } from '../actions/user_actions';
import { connect } from 'react-redux';


class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.currentUser.username,
      password: "",
    };

    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var placeholder = {
      id: this.props.currentUser.id,
      user: {
        user:{
          username: this.state.username,
          password: this.state.password,
        }}
    };
    const user = merge({}, placeholder);
    this.props.editUser( {user} );
    this.props.handleClose();
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
    if (this.props.isOpen) {
      return (
      <div className="modal_backdrop" onClick={ this.props.handleClose }>
        <div className="edit_modal">

          {/*<div className="avatar_column">
            <div className="avatar"/>
          </div>*/}

          <div className="edit_form_wrapper">

            <form className="edit_form" onSubmit={ this.handleSubmit } onClick={(e) => e.stopPropagation()}>
              <div className="modal_wrapper">
                <div className="modal_header">
                  CHANGE USERNAME
                </div>
                <input className="modal_input" required type='text'
                  onChange={this.update('username')} />
                <div className="modal_form_wrapper">
                </div>
                <div className="modal_header">
                  CHANGE PASSWORD
                </div>
                <input className="modal_input" required type='password'
                  onChange={this.update('password')} />
                <div className="modal_form_wrapper">
                </div>
              </div>
              <div className="modal_edit_buttons">

                { this.errors }

                <button onClick={this.props.handleClose} className="modal_cancel_button">Cancel</button>
                <button className="modal_edit_button">Save</button>
              </div>
            </form>

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
      isOpen: ownProps.isOpen,
      handleClose: ownProps.handleClose,
      currentUser: state.session.currentUser,

  };
};

const MapDispatchToProps = dispatch => {
  return {
    editUser: (user) => dispatch(editUser(user)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(EditModal);
