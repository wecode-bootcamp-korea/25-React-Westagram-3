import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  goToMain = () => {
    fetch('http://10.58.4.34:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('wtw-token', response.token);
          this.props.history.push('/Main-TY');
        } else if (!response.token) {
          alert('올바른 회원이 아닙니다');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // 아이디,비밀번호 창에서 유효성검사통과와 엔터 치면 메인으로 이동
  onCheckEnter = e => {
    const { id, pw } = this.state;
    const isInputValid = id.includes('@') && pw.length >= 5;
    if (e.key === 'Enter' && isInputValid) {
      this.goToMain();
    }
  };

  render() {
    const { id, pw } = this.state;
    const isInputValid = id.includes('@') && pw.length >= 5;
    return (
      <main className="login-box">
        <div className="login-container" onKeyPress={this.onCheckEnter}>
          <span className="login-logo">Westagram</span>
          <input
            type="text"
            className="input"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleInput}
            name="id"
          />
          <input
            type="password"
            className="input"
            placeholder="비밀번호"
            onChange={this.handleInput}
            name="pw"
          />
          <button
            type="button"
            onClick={this.goToMain}
            className={isInputValid ? 'button' : 'button-off'}
            disabled={!isInputValid}
          >
            로그인
          </button>
          <div className="validity">
            아이디 또는 비밀번호가 잘못 입력 되어 있습니다.
          </div>
          <Link to="#" className="forget">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </main>
    );
  }
}

export default withRouter(Login);
