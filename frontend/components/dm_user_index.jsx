import React from 'react';
import { connect } from 'react-redux';
import { requestAllUsers } from '../actions/user_actions';
import { selectUsers } from './selector';
import { isEmpty } from 'lodash';
import { selectMemberIds} from './selector';

class DMUserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.selectUsers = this.selectUsers.bind(this);
  }

  componentDidMount() {
    this.props.requestAllUsers();
  }

  selectUsers() {
    const channelId = this.props.match.params.directmessagesId;
      return (this.props.membersIds[channelId].member_ids.map(id => this.props.users[id]));
  }

  render() {
    if ( isEmpty(this.props.users) || isEmpty(this.props.membersIds) ) {
      return null;
    }
    const arr = this.selectUsers();
    const userIndexItems = arr.map((user, idx) => {
      return (
        <div className="user_wrapper" >
          <li className="test">
            <div className="username_icon_wrapper">
              <div className="icon_3" />
              <div className="username_2">
                { user.username }
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
          <div className="outer_user_index">
            <ul>
              { userIndexItems }
            </ul>
          </div>
        </div>
      );
  }

}

const mapStateToProps = state => {
  return {
    membersIds: state.entities.directMessages,
    users: state.entities.users,
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
)(DMUserIndex);
