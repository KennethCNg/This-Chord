import React from 'react';
import { Route, Link } from  'react-router-dom';
import MessageContainer from './message_container';
import ChatroomContainer from './chatroom_container';
import ChatroomModal from './chatroom_modal';
import DirectMessagingContainer from './direct_messaging_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      this.props.requestLogout();
    };
  }


  render() {
    if (this.props.currentUser) {
      return (
      <div className="home_container">

        {/* Left to Right */}
        <div className="home_outer_sidebar_left">
          <button className="direct_messaging">
            DM's
          </button>
        </div>


        <div className="home_inner_sidebar_left">
          <ChatroomContainer />
          {/*<Route path="/chatrooms" component={ ChatroomContainer } />*/}
          {/*<Route path="/messaging" component={ DirectMessagingContainer } />*/}
          <div className="logout">
            <div className="user_info">
              <div className="icon_2" />

            <div className="username_and_id_wrapper">
              <span className="username">
                { this.props.currentUser.username }
              </span>
              <span className="userid">
                #{ this.props.currentUser.id }
              </span>
            </div>

            </div>
            <button className="logout_button" onClick={ this.handleClick() }>Logout</button>
          </div>
        </div>

        {/* Messages */}
        <div className="home_message_container">
          <ChatroomModal />
          <Route exact path="/chatrooms/:chatroomsId" component={ MessageContainer } />
        </div>

        <div className="home_sidebar_right">
          /* Right Members nav-bar */
        </div>
        {/*Ends here*/}


      </div>
    );
    }
  }
}

export default Home;
