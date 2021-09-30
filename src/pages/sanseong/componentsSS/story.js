import React from 'react';

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      story: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/storyData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          story: data,
        });
      });
  }
  render() {
    const userData = this.state.story;
    const userList = userData.map((user, idx) => (
      <div className="account">
        <img alt="user" src={user.img} />
        <div className="textLine">
          <div className="name">{user.name}</div>
          <div className="time">{`${(idx + 1) * 10}` + '분'}</div>
        </div>
      </div>
    ));
    return <>{userList}</>;
  }
}

export default Story;
