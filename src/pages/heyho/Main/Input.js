import React from 'react';
import './Comment.scss';

class Input extends React.Component {
  render() {
    const { newReply, textChange, handleSubmit } = this.props;

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="댓글달기..."
            onChange={textChange}
            value={newReply}
          />
          <button>게시</button>
        </form>
      </>
    );
  }
}

export default Input;
