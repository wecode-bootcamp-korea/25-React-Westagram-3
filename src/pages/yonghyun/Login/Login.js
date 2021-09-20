import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleIdInput = e => {
    this.setState({ id: e.target.value });
  };

  handlePwInput = e => {
    this.setState({ pw: e.target.value });
  };

  render() {
    console.log(this.state);
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
                  <button className="loginBtn" onClick={this.goToMain}>
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
