import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';
import InputId from './InputId';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      idInputValue: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwInputValue: e.target.value,
    });
  };

  goToMain = () => {
    console.log(this.state.idInputValue);
    console.log(this.state.pwInputValue);
    fetch('http://10.58.2.15:8000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idInputValue,
        password: this.state.pwInputValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.props.history.push('/Main-HH');
      });
  };

  render() {
    return (
      <header className="Login">
        <div className="userInfo">
          <div className="westa">westagram</div>

          <InputId
            handleIdInput={this.handleIdInput}
            handlePwInput={this.handlePwInput}
            idInputValue={this.state.idInputValue}
            pwInputValue={this.state.pwInputValue}
            goToMain={this.goToMain}
          />
        </div>

        <Link className="forgotPwd" to="#">
          비밀번호를 잊으셨나요??
        </Link>
      </header>
    );
  }
}

export default withRouter(Login);
