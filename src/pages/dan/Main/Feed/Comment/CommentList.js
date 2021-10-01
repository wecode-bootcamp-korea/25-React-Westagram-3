import React from 'react';
import Comment from './Comment';
import './CommentList.scss';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      comment: '',
    };
  }

  componentDidMount() {
    fetch('./data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  textChange = event => {
    this.setState({
      comment: event.target.value,
    });
  };

  commentValid() {
    const { comment } = this.state;
    return comment.length > 0;
  }

  addComment = () => {
    if (this.commentValid()) {
      let token = localStorage.getItem('우리토큰') || '';
      fetch('http://10.58.3.17:8000/posts/comment', {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: JSON.stringify({
          comment_post: this.state.comment,
          post_id: '1',
        }),
      })
        .then(res => res.json())
        .then(result => {
          console.log('결과:', result);
          if (token) {
            const { commentList, comment } = this.state;
            this.setState({
              commentList: commentList.concat({
                content: comment,
                userName: 'Dan_d',
              }),
              comment: '',
            });
          }
        });
    }
  };

  handleButton = event => {
    event.preventDefault();
    this.addComment();
  };

  handleKeyPress = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.addComment();
    }
  };

  render() {
    const { commentList, comment } = this.state;
    return (
      <div className="area_comment">
        <div className="comments">
          <div className="list_comment" onChange={this.addComment}>
            {commentList.map(comment => {
              return (
                <Comment
                  key={comment.id}
                  userName={comment.userName}
                  comment={comment}
                  content={comment.commentText}
                />
              );
            })}
          </div>
          <form className="post_comment">
            <textarea
              type="input"
              placeholder="댓글 달기..."
              value={comment}
              onKeyPress={this.handleKeyPress}
              onChange={this.textChange}
            />
            <button type="submit" onClick={this.handleButton}>
              게시
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentList;
