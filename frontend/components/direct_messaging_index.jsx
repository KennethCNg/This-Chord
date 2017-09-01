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
