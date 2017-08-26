import React from 'react';
import { Link } from  'react-router-dom';
import MessageContainer from './message_container';

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
        <div className="home_sidebar_left">
          /*Placeholder for server nav-bar*/
        </div>


        <div className="home_direct_messages">
          /* Messages */
          <button onClick={ this.handleClick() }>Logout</button>
        </div>

        {/* Messages */}
        <div className="home_message_container">
          <div className="home_header">
            Welcome {this.props.currentUser.username}
          </div>
          <MessageContainer/>
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
