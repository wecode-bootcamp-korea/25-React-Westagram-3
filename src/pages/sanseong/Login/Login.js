import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isValid() {
    const { id, pw } = this.state;
    return id.includes('@') > 0 && pw.length >= 5;
  }

  goToMain = () => {
    this.props.history.push('/main-SS');
  };

  render() {
    const isEnabled = this.isValid();
    const btnOpacity = this.isValid() ? 1 : 0.6;
    return (
      <div className="Login">
        <div className="container">
          <h1 className="logo">Westagram</h1>
          <form className="logInArea" onChange={this.handleInput}>
            <input type="text" name="id" placeholder="ID" id="id" />
            <input
              type="password"
              name="pw"
              placeholder="Password"
              id="password"
            />
            <button
              class="login"
              onClick={this.goToMain}
              disabled={!isEnabled}
              style={{ opacity: btnOpacity }}
            >
              Log In
            </button>
          </form>
          <Link to="#">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
