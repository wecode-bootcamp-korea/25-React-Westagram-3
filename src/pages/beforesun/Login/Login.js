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
      isValid: '',
      disabled: '',
    };
  }
  handleInput = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.handleButton();
      }
    );
  };
  // 유효성 검사
  handleButton = () => {
    const { Id, Pw } = this.state;
    this.setState({
      isValid: Id.includes('@') && Pw.length >= 5,
    });
  };
  // 아이디,비밀번호 창에서 엔터 치면 로그인 버튼 클릭
  onCheckEnter = e => {
    if (e.key === 'Enter' && this.state.isValid) {
      this.goToMain();
    }
  };
  render() {
    return (
      <main className="login-box">
        <div className="login-container" onKeyPress={this.onCheckEnter}>
          <span className="Login-logo">Westagram</span>
          <input
            type="text"
            className="input"
            id="id-email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleInput}
            name="Id"
          />
          <input
            type="password"
            className="input"
            id="password"
            placeholder="비밀번호"
            onChange={this.handleInput}
            name="Pw"
          />
          <button
            type="button"
            onClick={this.goToMain}
            className={this.state.isValid ? 'button' : 'button-off'}
            id="login-button"
            disabled={!this.state.isValid}
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
