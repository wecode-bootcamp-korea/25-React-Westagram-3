import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-TY');
  };
  constructor() {
    super();
    this.state = {
      Id: '',
      Pw: '',
    };
  }
  handleIdInput = e => {
    this.setState({
      Id: e.target.value,
    });
  };
  handlePwInput = e => {
    this.setState({
      Pw: e.target.value,
    });
  };
  render() {
    return (
      <main className="main-box">
        <div className="login-container">
          <span className="Login-logo">Westagram</span>
          <input
            type="text"
            className="input"
            id="id-email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleIdInput}
          />
          <input
            type="password"
            className="input"
            id="password"
            placeholder="비밀번호"
            onChange={this.handlePwInput}
          />
          <button
            type="button"
            onClick={this.goToMain}
            className="button button-off"
            id="login-button"
          >
            로그인
          </button>
          <div className="validity">
            아이디 또는 비밀번호가 잘못 입력 되어 있습니다.
          </div>
          <a href="" className="forget">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </main>
    );
  }
}

export default withRouter(Login);
