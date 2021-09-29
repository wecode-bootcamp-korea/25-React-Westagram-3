import React from 'react';
import { withRouter } from 'react-router-dom';
import './InputId.scss';

class InputId extends React.Component {
  render() {
    const {
      handleIdInput,
      handlePwInput,
      goToMain,
      idInputValue,
      pwInputValue,
    } = this.props;
    return (
      <section className="inputs">
        <input
          type="text"
          name="ID"
          id="userId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />

        <input
          type="password"
          name="Password"
          id="userPassWord"
          placeholder="비밀번호"
          onChange={handlePwInput}
        />

        <button
          type="button"
          className={
            idInputValue.indexOf('@') !== -1 && pwInputValue.length > 5
              ? 'Active'
              : 'Disabled'
          }
          disabled={
            idInputValue.indexOf('@') !== -1 && pwInputValue.length > 5
              ? false
              : true
          }
          onClick={goToMain}
        >
          로그인
        </button>
      </section>
    );
  }
}

export default withRouter(InputId);
