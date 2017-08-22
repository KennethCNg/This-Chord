import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.linkRedirects = this.linkRedirects.bind(this);
    this.errors = this.errors.bind(this);
    this.header = this.header.bind(this);
    this.button = this.button.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  update(prop) {
    return e => this.setState({[prop]: e.currentTarget.value});
  }

  linkRedirects() {
    if (this.props.formType === "login") {
      return (
        <div>
          Need an account? <Link to="/signup">SignUp</Link>
        </div>
      );
    } else {
      return (
        <div>
          Have an account? <Link to="/login">Login</Link>
        </div>
      );
    }
  }

  errors() {
    if (this.props.errors) {
      const errorList = this.props.errors.map((error, idx) => {
        return (
          <li key={`error-${idx}`}>
            {error}
          </li>
        );
      });
      return (
        <ul>
          { errorList }
        </ul>

        );
    }
  }


header() {
  if (this.props.formType === 'login') {
    return (
      <h3>WELCOME BACK</h3>
    );
  } else {
      return (
        <h3>MY ACCOUNT</h3>
      );
  }
}

button() {
  if (this.props.formType === 'login') {
    return (
      <button className={"primary-button"}>Login</button>
    );
  } else {
      return (
        <button className={"primary-button"}>Signup</button>
      );
  }
}
  render() {
    return (
      <div className="login-form-container">

        {this.errors()}

        <form onSubmit={ this.handleSubmit } className="login-form-box">
          {this.header()}
          <div>
            <label>
              Username:
            </label>
            <div>
            <input className="session-color" type='text'
              value={ this.state.username }
              onChange={this.update('username')} />
            </div>
          </div>

          <br/>
          <div>
            <label>
              Password:
            </label>
          </div>
          <div>
            <input className="session-color" type='text'
              value={ this.state.password }
              onChange={this.update('password')} />
          </div>

          {this.button()}

          <footer>
            {this.linkRedirects()}
          </footer>
        </form>
    </div>
  );
  }
}

export default withRouter(SessionForm);
