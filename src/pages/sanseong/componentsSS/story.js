import React from 'react';

class Story extends React.Component {
  render() {
    const userData = this.props.storyUsers;
    const userList = userData.map((user, idx) => (
      <div className="account">
        <img alt="user" src={user.img} />
        <div className="textLine">
          <div className="name">{user.nickname}</div>
          <div className="time">{`${(idx + 1) * 10}` + '분'}</div>
        </div>
      </div>
    ));
    return <>{userList}</>;
  }
}

export default Story;
