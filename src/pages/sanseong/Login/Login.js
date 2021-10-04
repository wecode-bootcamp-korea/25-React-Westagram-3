import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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
    const { id, pw } = this.state;
    fetch('http://10.58.5.12:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
        // phone_number: '00000',
        // information: 'hi',
        // name: 'acid',
      }),
    })
      .then(response => response.json())
      .then(result => result.token && this.props.history.push('/Main-SS'));
  };

  render() {
    const isEnabled = this.isValid();
    return (
      <div className="Login">
        <div className="container">
          <h1 className="logo">Westagram</h1>
          <div className="logInArea" onChange={this.handleInput}>
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
              style={{ opacity: isEnabled ? 1 : 0.6 }}
            >
              Log In
            </button>
          </div>
          <Link to="#">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
