import React from 'react';

class Suggest extends React.Component {
  constructor() {
    super();
    this.state = {
      suggest: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/suggestData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          suggest: data,
        });
      });
  }

  render() {
    const userData = this.state.suggest;
    const userList = userData.map(user => (
      <>
        <div className="account">
          <img alt="user" src={user.img} />
          <div className="textLine">
            <div className="name">{user.name}</div>
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
