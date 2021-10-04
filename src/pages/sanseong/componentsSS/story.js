import React, { useReducer } from 'react';

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
    const { story } = this.state;
    return (
      <>
        {story.map(user => (
          <div className="account" key={user.id}>
            <img alt="user" src={user.img} />
            <div className="textLine">
              <div className="name">{user.name}</div>
              <div className="time">{`${(user.id + 1) * 10}` + '분'}</div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Story;
