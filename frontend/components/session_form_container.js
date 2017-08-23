import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedin: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: (ownProps.location.pathname === "/login" ? "login" : "signup"),
    guest: {user:{username: "test1", password: "password"}},

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === "/login") {
      return {
        processForm: (user) => dispatch(login(user)),
        guestLogin: (guest) => dispatch(login(guest)),
      };
    } else { return {
        processForm: (user) => dispatch(signup(user)),
        guestLogin: (guest) => dispatch(login(guest)),
      };
      }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
