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



        <div className="home-sidebar-left"></div>

        <div className="home-direct_messages"></div>

        <div className="home_message_container">
          <h1 className="home_header">
            Welcome {this.props.currentUser.username}
            <button onClick={ this.handleClick() }>Logout</button>
          </h1>
          <MessageContainer/>
        </div>

        <div className="home-sidebar-right"></div>

      </div>
    );
    }
  }
}

export default Home;
