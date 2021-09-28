import React from 'react';

class Suggest extends React.Component {
  render() {
    const userData = this.props.suggestList;
    const userList = userData.map((user, idx) => (
      <>
        <div className="account">
          <img alt="user" src={user.img} />
          <div className="textLine">
            <div className="name">{user.nickname}</div>
            <div className="root">
              zzoozzoo_boy님 외 2명이 팔로우 하고 있습니다.
            </div>
          </div>
        </div>
        <div className="isFollow">Follow</div>
      </>
    ));
    return <>{userList}</>;
  }
}

export default Suggest;
