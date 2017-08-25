import React from 'react';
import { Link } from  'react-router-dom';
// import Channel from './channel';
import MessageContainer from './message_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleclick = this.handleclick.bind(this);
  }


  handleClick() {
    return (e) => {
      e.preventDefault();
      this.props.requestLogout();
    };
  }

  handleEnter() {
    return (e) => {
      e.preventDefault();
      this.props.
    }
  }


  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>
            Welcome {this.props.currentUser.username}
          </h1>
          <div>
            <MessageContainer/>
          </div>
      </div>
    );
    }
  }
}

export default Home;
