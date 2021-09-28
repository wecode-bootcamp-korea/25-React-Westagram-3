import React from 'react';

class Comment extends React.Component {
  render() {
    const { id, userName, content } = this.props;
    return (
      <>
        <li className="comment-second" key={id}>
          <div className="yous">
            <a className="you-name" href="#x">
              {userName}
            </a>
            <span className="comment-writ">{content}</span>
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
