import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    this.props.history.push('/Main-YH');
  };

  render() {
    const { id, pw } = this.state;
    const canLogin = id.includes('@') && pw.length > 4;
    return (
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
                  name="id"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={this.handleInput}
                  onKeyUp={canLogin}
                />
              </div>
              <div className="inputBox">
                <input
                  className="iPw"
                  name="pw"
                  type="password"
                  placeholder="비밀번호"
                  onChange={this.handleInput}
                  onKeyUp={canLogin}
                />
              </div>
              <div className="loginBox">
                <button
                  className={canLogin ? 'loginBtn' : 'loginXBtn'}
                  onClick={this.goToMain}
                  disabled={!canLogin}
                >
                  로그인
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="findPw">
          <Link to="#n">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
