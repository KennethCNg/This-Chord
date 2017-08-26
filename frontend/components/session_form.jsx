import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.linkRedirects = this.linkRedirects.bind(this);
    this.errors = this.errors.bind(this);
    this.header = this.header.bind(this);
    this.button = this.button.bind(this);
    this.guestLogin = this.guestLogin.bind(this);

  }

  componentDidMount() {
    $(".Lul").mouseenter( () => {
      $("#Lulchild").addClass("LulchildActive").removeClass("LulchildInactive");
    });
    $(".Lul").mouseleave( () => {
      $("#Lulchild").addClass("LulchildInactive").removeClass("LulchildActive");
    });
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

        <div className="session-link">

          <div className="link-text">
            <p className="link-text-p">Need an account? </p>
            <Link onClick={this.props.resetErrors} to="/signup" className="session-redirect-link"> Register </Link>
            <p className="link-text-p">or take a peek </p>
            <div className="guest-link" onClick={this.guestLogin}> Guest Login </div>
          </div>

        </div>

      );
    } else {
      return (
        <div className="session-link">

          <div className="link-text">
            <p className="link-text-p">Already have an account? </p>
            <Link onClick={this.props.resetErrors} to="/login" className="session-redirect-link"> Login </Link>
            <p className="link-text-p">or take a peek</p>
            <div className="guest-link" onClick={this.guestLogin}> Guest Login </div>
          </div>

        </div>

      );
    }
  }

  errors() {
    if (this.props.errors) {
      const errorList = this.props.errors.map((error, idx) => {
        return (
          <li key={`error-${idx}`}>
            { error }
          </li>
        );
      });
      return (
        <ul className="session-errors">
          { errorList }
        </ul>

        );
    }
  }


header() {
  if (this.props.formType === 'login') {
    return (
      <h3 className="form-header">WELCOME BACK.</h3>
    );
  } else {
      return (
        <h3 className="form-header">CREATE AN ACCOUNT</h3>
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
        <button className={"primary-button"}>Continue</button>
      );
  }
}

guestLogin() {
  this.props.guestLogin(this.props.guest);
}

  render() {
    return (
      <div className="auth-outer">
        <div className="auth-inner">
          <div className="session-form-container">

              <div className="session-img"></div>
            <form onSubmit={ this.handleSubmit } className="session-form-box">
              {this.header()}
              <div className="register-and-input">

              <div >
                <label className="register">
                  USERNAME
                </label>
                <div>
                  <input required className="session-input" type='text'
                    value={ this.state.username }
                    onChange={this.update('username')} />
                  </div>
                </div>

                <br/>
                <div>
                  <label className="register">
                    PASSWORD
                  </label>
                </div>


                <div>
                  <input required className="session-input" type='password'
                    value={ this.state.password }
                    onChange={this.update('password')} />
              </div>

              <div className="Lul">
                FORGOT YOUR PASSWORD?
                <div id='Lulchild' className="LulchildInactive">
                  <br/>
                   Uhhhh... ¯\_(ツ)_/¯
                </div>
              </div>

              </div>

              {this.errors()}
              {this.button()}

              <footer className="session-link">
                {this.linkRedirects()}

              </footer>
            </form>

        </div>
      </div>
    </div>
  );
  }
}

export default withRouter(SessionForm);
