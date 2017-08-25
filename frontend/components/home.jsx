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
        <div>
          <h1>
            Welcome {this.props.currentUser.username}
          </h1>
          <div>
            <button onClick={ this.handleClick() }>LogOut</button>
          </div>
          <div>
            <MessageContainer/>
          </div>
      </div>
    );
    }
  }
}

export default Home;
