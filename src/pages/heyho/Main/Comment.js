import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <>
        <li>
          <span className="haniName">{this.props.userName}</span>
          <span>{this.props.content}</span>
        </li>
      </>
    );
  }
}

export default Comment;
