/* globals Pusher */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router';
import { selectDMs } from './selector';
import { NavLink } from 'react-router-dom';
import { requestAllChatrooms } from '../actions/chatroom_actions';

class DMIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channel_id: "",
      member_ids: [],
    };
  }

  componentDidMount() {
    this.props.requestAllChatrooms();

    // const pusher = new Pusher('d2410c3eb09a8dd9ded4', {
    //   cluster: 'us2',
    //   encrypted: true
    // });

    // const dmCreate = pusher.subscribe(`thischord_` + `${this.state.chatroom_id}`);
    // dmCreate.bind('create_message', data => {
    //   this.props.requestMessages(this.state.chatroom_id);
    // });
    //
    // const dmDelete = pusher.subscribe(`thischord_` + `${this.state.chatroom_id}`);
    // dmDelete.bind('delete_message', data => {
    //   this.props.requestMessages(this.state.chatroom_id);
    // });
  }

  render() {
    if (this.props.directMessages.length > 0) {
      const directMessageIndexItems = this.props.directMessages.map((dm, idx) => {
        return (
          <NavLink
            key={`dm-nv-${dm.id}`}
            to={`/direct_messages/${dm.id}`}
            activeClassName="banana"
            >
            <li
              className="chatroom_index_item"
              key={`dm-li-${dm.id}`}>
              <div
                className="chatroom_name"
                key={`dm-div-${dm.id}`}>
                { dm.name }
              </div>
            </li>
          </NavLink>
        );
      });
      return (
        <div>
          <ul className="chatroom_index">
            { directMessageIndexItems }
          </ul>
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
    directMessages: selectDMs(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllChatrooms: () => dispatch(requestAllChatrooms()),
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DMIndex));
