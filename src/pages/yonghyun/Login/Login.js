import React, { useState } from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      canLogin: false,
      id: '',
      pw: '',
    };
  }

  handleIdInput = e => {
    this.setState({ id: e.target.value });
    this.isLogin();
  };

  handlePwInput = e => {
    this.setState({ pw: e.target.value });
    this.isLogin();
  };

  isLogin = () => {
    if (this.state.id.includes('@') && this.state.pw.length > 4) {
      this.setState({
        canLogin: true,
      });
    } else {
      this.setState({
        canLogin: false,
      });
    }
  };

  render() {
    console.log(this.state);

    const { canLogin } = this.state;

    return (
      <>
        <div className="mainBox">
          <div className="logo">
            <h1>Westagram</h1>
          </div>
          <div className="loginBox">
            <form action="" className="idPw">
              <div className="inputList">
                <div className="inputBox">
                  <input
                    className="iId"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    onChange={this.handleIdInput}
                  />
                </div>
                <div className="inputBox">
                  <input
                    className="iPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={this.handlePwInput}
                  />
                </div>
                <div className="loginBox">
                  <button
                    className={canLogin ? 'loginBtn' : 'loginXBtn'}
                    onClick={this.goToMain}
                  >
                    로그인
                  </button>
                  {/* <Link to="/main" className="loginBtn" disabled>로그인</Link> */}
                </div>
              </div>
            </form>
          </div>
          <div className="findPw">
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
