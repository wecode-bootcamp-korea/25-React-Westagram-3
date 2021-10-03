import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import FriendBox from './FriendBox/FriendBox';
import StoryBox from './StoryBox/StoryBox';
import './Side.scss';

class Side extends React.Component {
  constructor() {
    super();
    this.state = {
      friendBoxList: [],
      storyBoxList: [],
    };
  }

  componentDidMount() {
    fetch('http:/data/StoryBoxData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          storyBoxList: result,
        });
      });

    fetch('http:/data/FriendBoxData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          friendBoxList: result,
        });
      });
  }
  render() {
    return (
      <section className="side">
        <div className="side-user">
          <Link to="#">
            <img alt="user-poto" src="/images/beforesun/IMG_8770.jpeg" />
          </Link>
          <div className="side-my">
            <Link to="#">ty_050</Link>
            <span>태양</span>
          </div>
        </div>
        <div className="story-box">
          <ul className="story-info">
            <li className="story-text">
              <span>스토리</span>
              <button type="button">모두 보기</button>
            </li>
            {this.state.storyBoxList.map(content => {
              return (
                <StoryBox
                  key={content.id}
                  src={content.src}
                  name={content.name}
                  time={content.time}
                />
              );
            })}
          </ul>
        </div>
        <ul className="friend-box">
          <li className="story-text">
            <span>회원님을 위한 추천</span>
            <button>모두 보기</button>
          </li>
          {this.state.friendBoxList.map(content => {
            return (
              <FriendBox
                key={content.id}
                src={content.src}
                name={content.name}
                follow={content.follow}
              />
            );
          })}
        </ul>
        <Footer />
      </section>
    );
  }
}
export default Side;
