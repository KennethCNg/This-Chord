import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router';
import { selectDMs } from './selector';

class DMIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channel_id: "",
      member_ids: [],
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(chatroomId) {
  //   return (e) => {
  //     e.preventDefault();
  //     this.props.requestDestroyChatroom(chatroomId);
  //   };
  // }


  render() {
    if (this.props.directMessages.length > 0) {
      const directMessageIndexItems = this.props.directMessages.map((dm, idx) => {
        return (
          <NavLink to={`/direct_messages/${dm.id}`}>
            <li key={`dm-li-${idx}`}>
              { dm.name }
            </li>
          </NavLink>
        );
      });
      return (
        <div>
          <ul className="dm_index">
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

  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DMIndex));
