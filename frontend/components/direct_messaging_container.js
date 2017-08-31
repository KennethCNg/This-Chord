import { connect } from 'react-redux';
import DirectMessaging from './direct_messaging';
import { selectDMs } from './selector';
import { requestAllUsers } from '../actions/user_actions';

const mapStateToProps = state => {
  return {
    directMessages: selectDMs(state),

  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllUsers: () => dispatch(requestAllUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessaging);
