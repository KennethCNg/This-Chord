import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedin: Boolean(state.session.currentUser),
    errors: state.errors,
    formType: (ownProps.location.pathname === "/login" ? "login" : "signup")

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === "/login") {
      return {
        processForm: (user) => dispatch(login(user))
      };
    } else { return {
        processForm: (user) => dispatch(signup(user))
      };
      }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
