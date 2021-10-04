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
    const { suggest } = this.state;
    return (
      <>
        {suggest.map(user => (
          <>
            <div className="account" key={user.id}>
              <img alt="user" src={user.img} />
              <div className="textLine">
                <div className="name">{user.name}</div>
                <div className="root">{user.text}</div>
              </div>
            </div>
            <div className="isFollow">Follow</div>
          </>
        ))}
      </>
    );
  }
}

export default Suggest;