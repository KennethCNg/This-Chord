import React from 'react';
import DMIndex from './direct_messaging_index';
import DMModal from './direct_messaging_modal';

class DirectMessaging extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  componentDidMount() {
    this.props.requestAllUsers();
  }

  render() {
    return(
      <div>
        <div className="thischord" />


        <div>
          <div className="channel_text_and_button">
            <div className="channel_text">
              DIRECT MESSAGES
            </div>

          <div>
            <button onClick={ this.handleClick } className="channel_button">
              +
            </button>
          </div>
        </div>

          <DMIndex />
        </div>

          <DMModal
            isOpen={this.state.modalOpen}
            handleClose={this.handleClick}
            currentUser={this.props.currentUser}
            users={this.props.users}
            />
    </div>
    );
  }

}

export default DirectMessaging;
