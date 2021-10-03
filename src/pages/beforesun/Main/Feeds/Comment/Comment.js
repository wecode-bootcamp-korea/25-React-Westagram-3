import React from 'react';
import { Link } from 'react-router-dom';
import './Comment.scss';
class Comment extends React.Component {
  render() {
    return (
      <>
        <li className="comment-second">
          <div className="user">
            <Link className="user-name" href="#x">
              {this.props.userName}
            </Link>
            <span className="comment-writ">{this.props.content}</span>
          </div>
          <img
            alt="heart-like"
            className="heart-like"
            src="/images/beforesun/heart.png"
          />
        </li>
      </>
    );
  }
}
export default Comment;
