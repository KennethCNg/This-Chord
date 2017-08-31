import React from 'react';
import { connect } from 'react-redux';
import { requestCreateDM } from '../actions/direct_message_actions';

class DMModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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
                <input className="modal_input" required type='text'
                  value={ this.state.name }
                  onChange={this.update('name')} />
              </div>
            </div>
            <div className="modal_buttons">

                <button onClick={this.props.handleClose} className="modal_cancel_button">Cancel</button>
                <button className="modal_create_button">Create Channel</button>
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
    requestCreateDM: (dm) => dispatch(requestCreateDM(dm)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(DMModal);
