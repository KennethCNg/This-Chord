import React from 'react';
import merge from 'lodash/merge';
import { editUser } from '../actions/user_actions';
import { connect } from 'react-redux';


class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.currentUser.username,
      // password: "",
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
          username: this.state.username
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
        <div className="modal">

          <form onSubmit={ this.handleSubmit } onClick={(e) => e.stopPropagation()}>
            <div className="modal_wrapper">
              <div className="modal_header">
                USERNAME
              </div>
              <input className="modal_input" required type='text'
                onChange={this.update('name')} />
              <div className="modal_form_wrapper">
              </div>
            </div>
            <div className="modal_buttons">

                <button onClick={this.props.handleClose} className="modal_cancel_button">Cancel</button>
                <button className="modal_create_button">Save</button>
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
