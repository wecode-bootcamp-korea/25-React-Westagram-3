import React from 'react';
import { Link } from 'react-router-dom';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    return (
      <>
        <p className="txt_comment" key={this.props.i + 1}>
          <span>
            <Link to="#n" className="txt_id">
              follow ID
            </Link>
            <span>{this.props.content.comment}</span>
          </span>
          <button id="delete" type="button">
            X
          </button>
        </p>
      </>
    );
  }
}

export default Comment;
