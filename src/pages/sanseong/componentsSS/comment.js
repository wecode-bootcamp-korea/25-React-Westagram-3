import React from 'react';
import './componentStyle/comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      commentInput: '',
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comment,
    });
  }

  saveContext = e => {
    const { value } = e.target;
    this.setState({
      commentInput: value,
    });
  };

  addComment = e => {
    const { comments, commentInput } = this.state;
    if (commentInput) {
      const count = comments.length;
      this.setState({
        comments: comments.concat({
          id: count,
          userName: 'Acidity',
          text: commentInput,
        }),
        commentInput: '',
      });
    }
  };

  enterPress = e => {
    if (e.code === 'Enter') {
      this.addComment();
    }
  };

  render() {
    const { comments } = this.state;
    return (
      <>
        <ul>
          {comments.map(context => {
            const { id, userName, text } = context;
            return (
              <li className="comment" key={id}>
                <div className="name">{userName}</div>
                <div className="content">{text}</div>
              </li>
            );
          })}
        </ul>
        <span className="time">1 hours</span>
        <div className="commentArea">
          <input
            id="commentText"
            placeholder="댓글 달기..."
            value={this.state.commentInput}
            onChange={this.saveContext}
            onKeyUp={this.enterPress}
          />
          <button id="commentBtn" onClick={this.addComment}>
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
