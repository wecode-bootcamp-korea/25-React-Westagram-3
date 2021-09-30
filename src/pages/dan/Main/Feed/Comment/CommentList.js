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
    fetch('http://localhost:3000/data/commentData.json', {
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
    this.setState(
      {
        comment: event.target.value,
      },
      () => {
        this.commentValid();
      }
    );
  };

  commentValid() {
    const { comment } = this.state;
    return comment.length > 0 ? true : false;
  }

  addComment = () => {
    let token = localStorage.getItem('우리토큰') || '';
    fetch('http://10.58.7.150:8000/posts/comment', {
      headers: {
        Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify({
        comment_post: this.state.comment,
        post_id: '1',
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log('결과:', result);
      });

    const { commentList, comment } = this.state;
    if (this.commentValid() === true) {
      this.setState({
        commentList: commentList.concat({
          content: comment,
          userName: 'Dan_d',
        }),
        comment: '',
      });
    }
  };

  handleButton = event => {
    event.preventDefault();
    this.setState(() => {
      this.addComment();
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.setState(() => {
        this.addComment();
      });
    }
  };

  render() {
    const { commentList, comment } = this.state;
    return (
      <div className="area_comment">
        <div className="comments">
          <div
            id="commentList"
            className="list_comment"
            onChange={this.addComment}
          >
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
          <form id="post" className="post_comment">
            <textarea
              id="newComment"
              type="input"
              placeholder="댓글 달기..."
              value={comment}
              onKeyPress={this.handleKeyPress}
              onChange={this.textChange}
            ></textarea>
            <button id="btnPost" type="submit" onClick={this.handleButton}>
              게시
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentList;
