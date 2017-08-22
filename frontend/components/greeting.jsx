import React from 'react';
import { Link } from  'react-router-dom';
import GreetingContainer from './greeting_container';

class Greetings extends React.Component {

  constructor(props) {
    super(props);

    this.handleclick = this.handleclick.bind(this);
  }


  handleclick() {
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
          <button onClick={this.handleclick()} >Logout</button>
      </div>
    );
    }
    else {
      return (
        <div>
          <Link to="/signup">Signup</Link>
          <br/>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }

}

export default Greetings;
