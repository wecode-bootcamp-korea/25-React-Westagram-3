import React from 'react';
import { withRouter } from 'react-router-dom';
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
    this.setState({
      idValue: event.target.value,
    });
  };

  // PW state
  handlePwInput = event => {
    this.setState({
      pwValue: event.target.value,
    });
  };

  // Main페이지로 이동
  goToDanMain = () => {
    this.props.history.push('/Main-D');
  };

  render() {
    return (
      <div className="login_container">
        <main className="login">
          <h1>Danstagram</h1>

          <form id="loginForm" className="login_wrap">
            <input
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={this.state.idValue}
              onChange={this.handleIdInput}
            />
            <input
              id="userPw"
              type="password"
              placeholder="비밀번호"
              value={this.state.pwValue}
              onChange={this.handlePwInput}
            />
            <button id="btnLogin" type="submit" onClick={this.goToDanMain}>
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
