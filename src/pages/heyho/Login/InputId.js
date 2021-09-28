import React from 'react';
import { withRouter } from 'react-router-dom';
import './InputId.scss';

class InputId extends React.Component {
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
    this.props.history.push('/Main-HH');
  };

  render() {
    return (
      <section className="inputs">
        <input
          type="text"
          name="ID"
          id="userId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.handleIdInput}
        />

        <input
          type="password"
          name="Password"
          id="userPassWord"
          placeholder="비밀번호"
          onChange={this.handlePwInput}
        />

        <button
          type="button"
          className={
            this.state.idInputValue.indexOf('@') !== -1 &&
            this.state.pwInputValue.length >= 5
              ? 'Active'
              : 'Disabled'
          }
          disabled={
            this.state.idInputValue.indexOf('@') !== -1 &&
            this.state.pwInputValue.length > 5
              ? false
              : true
          }
          onClick={this.goToMain}
        >
          로그인
        </button>
      </section>
    );
  }
}

export default withRouter(InputId);
