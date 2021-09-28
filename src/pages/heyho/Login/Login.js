import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import InputId from './InputId';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      idInputValue: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwInputValue: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/Main-HH');
  };

  render() {
    return (
      <header className="Login">
        <div className="userInfo">
          <div className="westa">westagram</div>

          <InputId
            handleIdInput={this.handleIdInput}
            handlePwInput={this.handlePwInput}
            idInputValue={this.state.idInputValue}
            pwInputValue={this.state.pwInputValue}
            goToMain={this.goToMain}
          />
        </div>

        <a className="forgotPwd" href="/login-HH">
          비밀번호를 잊으셨나요??
        </a>
      </header>
    );
  }
}

export default withRouter(Login);
