import React from 'react';
import { connect } from 'react-redux';

class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var placeholder = {
      username: this.state.username,
    };
    this.props.handleClose();
    const user = Object.assign({}, placeholder);
    this.props.editUser( {user} );
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
                CREATE CHANNEL
              </div>
              <div className="modal_form_wrapper">
                <div className="modal_input_name">
                  CHANNEL NAME
                </div>
                <input className="modal_input" required type='text'
                  value={ this.state.name }
                  onChange={this.update('name')} />
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

  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(EditModal);
