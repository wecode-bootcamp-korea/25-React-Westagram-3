import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <>
        <p className="txt_comment" key={comment.id}>
          <span>
            <Link to="#n" className="txt_id">
              {comment.userName}
            </Link>
            <span>{comment.content}</span>
          </span>
          <button type="button">X</button>
        </p>
      </>
    );
  }
}

export default Comment;
