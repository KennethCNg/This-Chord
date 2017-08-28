import React from 'react';
import { Route, Link } from  'react-router-dom';
import MessageContainer from './message_container';
import ChatroomContainer from './chatroom_container';

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

        </div>


        <div className="home_inner_sidebar_left">
          <ChatroomContainer/>
          <div>
            <button onClick={ this.handleClick() }>Logout</button>
          </div>
        </div>

        {/* Messages */}
        <div className="home_message_container">
          <Route path="/chatrooms/:chatroomsId" component={ MessageContainer } />
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
