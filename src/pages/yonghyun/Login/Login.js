import React from 'react';
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
  };

  handlePwInput = e => {
    this.setState({ pw: e.target.value });
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

  goToMain = () => {
    if (this.state.canLogin === true) this.props.history.push('/Main-YH');
  };

  render() {
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
                    onKeyUp={this.isLogin}
                  />
                </div>
                <div className="inputBox">
                  <input
                    className="iPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={this.handlePwInput}
                    onKeyUp={this.isLogin}
                  />
                </div>
                <div className="loginBox">
                  <button
                    className={canLogin ? 'loginBtn' : 'loginXBtn'}
                    onClick={this.goToMain}
                  >
                    로그인
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="findPw">
            <a href="#a">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
