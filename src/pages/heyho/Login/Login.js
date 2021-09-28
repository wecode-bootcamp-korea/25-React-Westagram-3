import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import InputId from './InputId';

class Login extends React.Component {
  render() {
    return (
      <header className="Login">
        <div className="userInfo">
          <div className="westa">westagram</div>

          <InputId />
        </div>

        <a className="forgotPwd" href="/login-HH">
          비밀번호를 잊으셨나요??
        </a>
      </header>
    );
  }
}

export default withRouter(Login);
