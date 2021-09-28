import React from 'react';
import { withRouter } from 'react-router-dom';
import '../Common.scss';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  //ID state
  handleIdInput = event => {
    this.setState(
      {
        idValue: event.target.value,
      },
      () => {
        this.checkIdValid();
      }
    );
  };

  // PW state
  handlePwInput = event => {
    this.setState(
      {
        pwValue: event.target.value,
      },
      () => {
        this.checkPwValid();
      }
    );
  };

  // ID validation
  checkIdValid() {
    const { idValue } = this.state;
    return idValue.includes('@') && idValue.length > 0 ? true : false;
  }

  // PW validation
  checkPwValid() {
    const { pwValue } = this.state;
    return pwValue.length >= 5 ? true : false;
  }

  // Login Button on : off
  handleButton = () => {
    this.setState(() => {
      this.checkIdValid();
      this.checkPwValid();
    });
    return this.checkIdValid() === true && this.checkPwValid() === true
      ? true
      : false;
  };

  // Main 페이지로 이동
  goToDanMain = () => {
    this.props.history.push('/Main-D');
  };

  render() {
    const isValid = this.handleButton();
    return (
      <div className="login_container common">
        <main className="login">
          <h1>Danstagram</h1>

          <form id="loginForm" className="login_wrap">
            <input
              id="userId"
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={this.state.idValue}
              onChange={this.handleIdInput}
            />
            <input
              id="userPw"
              name="pw"
              type="password"
              placeholder="비밀번호"
              value={this.state.pwValue}
              onChange={this.handlePwInput}
            />
            <button
              id="btnLogin"
              type="submit"
              className={isValid ? 'active' : ' '}
              disabled={!isValid}
              onClick={this.goToDanMain}
            >
              로그인
            </button>
          </form>

          <a href="#n" className="lost_pw">
            비밀번호를 잊으셨나요?
          </a>
        </main>
      </div>
    );
  }
}

export default withRouter(Login);
