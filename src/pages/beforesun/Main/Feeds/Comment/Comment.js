import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <>
        {this.props.comments.map((text, i) => {
          return (
            <li className="comment-second" key={i + 1}>
              <div className="yous">
                <a className="you-name" href="#">
                  ty_050
                </a>
                <span className="comment-writ"> {text.comment} </span>
              </div>
              <img
                alt="heart-like"
                className="heart-like"
                src="/images/beforesun/heart.png"
              />
            </li>
          );
        })}
      </>
    );
  }
}
export default Comment;
