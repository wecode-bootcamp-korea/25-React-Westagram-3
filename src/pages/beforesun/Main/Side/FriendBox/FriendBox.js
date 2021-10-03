import React from 'react';
import { Link } from 'react-router-dom';
import './FriendBox.scss';

class FriendBox extends React.Component {
  render() {
    return (
      <>
        <li className="side-friend">
          <Link to="#">
            <img alt="user-poto" src={this.props.src} />
          </Link>
          <div className="friend-name">
            <Link to="#">{this.props.name}</Link>
            <span>{this.props.follow}</span>
          </div>
          <button type="button">팔로우</button>
        </li>
      </>
    );
  }
}
export default FriendBox;
