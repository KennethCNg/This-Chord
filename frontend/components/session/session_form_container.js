import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions.js';
import { clearErrors } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedin: Boolean(state.session.currentUser),
    errors: state.ui.errors,
    formType: (ownProps.location.pathname === "/login" ? "login" : "signup"),
    guest: {user:{username: "Guest", password: "password"}},

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === "/login") {
      return {
        processForm: (user) => dispatch(login(user)),
        guestLogin: (guest) => dispatch(login(guest)),
        resetErrors: () => dispatch(clearErrors()),
      };
    } else { return {
        processForm: (user) => dispatch(signup(user)),
        guestLogin: (guest) => dispatch(login(guest)),
        resetErrors: () => dispatch(clearErrors()),
      };
      }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
