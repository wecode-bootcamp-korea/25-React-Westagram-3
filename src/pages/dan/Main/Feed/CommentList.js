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

  // Comment state
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

  // Comment validation
  commentValid() {
    const { comment } = this.state;
    return comment.length > 0 ? true : false;
  }

  // Comment 추가 후 textarea 리셋
  addComment = () => {
    if (this.commentValid() === true) {
      this.setState({
        commentList: this.state.commentList.concat({
          comment: this.state.comment,
        }),
        comment: '',
      });
    }
  };

  // 게시 button Event
  handleButton = event => {
    event.preventDefault();
    this.setState(() => {
      this.addComment();
    });
    console.log(this.state.comment);
  };

  // enter key Event
  handleKeyPress = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.setState(() => {
        this.addComment();
      });
      event.target.value = '';
    }
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

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
                  name={comment.userName}
                  //commentList={commentList}
                  comment={comment}
                  content={comment.content}
                />
              );
            })}
          </div>
          <form id="post" className="post_comment">
            <textarea
              id="newComment"
              type="input"
              placeholder="댓글 달기..."
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
