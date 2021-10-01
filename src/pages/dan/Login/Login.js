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

  handleIdInput = event => {
    this.setState({
      idValue: event.target.value,
    });
  };

  checkIdValid() {
    const { idValue } = this.state;
    return idValue.includes('@') && idValue.length > 0;
  }

  handlePwInput = event => {
    this.setState({
      pwValue: event.target.value,
    });
  };

  checkPwValid() {
    const { pwValue } = this.state;
    return pwValue.length >= 5;
  }

  handleButton = () => {
    return this.checkIdValid() && this.checkPwValid();
  };

  goToDanMain = () => {
    fetch('http://10.58.3.17:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log('결과:', result);
        if (result.token) {
          localStorage.setItem('우리토큰', result.token);
          this.props.history.push('/Main-D');
        }
      });
  };

  render() {
    const isValid = this.handleButton();
    return (
      <div className="login_container common">
        <main className="login">
          <h1>Danstagram</h1>

          <form className="login_wrap">
            <input
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={this.state.idValue}
              onChange={this.handleIdInput}
            />
            <input
              name="pw"
              type="password"
              placeholder="비밀번호"
              value={this.state.pwValue}
              onChange={this.handlePwInput}
            />
            <button
              type="button"
              className={isValid ? 'active' : 'non_active'}
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
