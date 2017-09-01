import React from 'react';
import { connect } from 'react-redux';
import { requestAllUsers } from '../actions/user_actions';
import { selectUsers } from './selector';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllUsers();
  }

  // componentWillReceiveProps() {
  //   this.props.requestAllUsers();
  // }

  render() {
    if (this.props.users.length > 0) {
      const userIndexItems = this.props.users.map((user, idx) => {
        return (
          <div className="user_wrapper" >
            <li key={`user-div-${user.id}`} className="test">
              <div className="username_icon_wrapper">
                <div className="icon_3" />
                <div className="username_2">
                  {user.username}
                </div>
              </div>
            </li>
          </div>
        );
      });
      return (
        <div>
          <div className="user_header">
            MEMBERS
          </div >
          <div className="user_index">
            <ul>
              { userIndexItems }
            </ul>
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

const mapStateToProps = state => {
  return {
    users: selectUsers(state),
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
)(UserIndex);
