import react from 'react';

class Comment extends react.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      context: '',
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
      context: value,
    });
  };

  addComment = e => {
    const { comments, context } = this.state;
    if (context) {
      let count = comments.length;
      this.setState({
        comments: comments.concat({
          id: count,
          userName: 'Acidity',
          text: context,
        }),
        context: '',
      });
      count++;
    }
  };

  enterPress = e => {
    if (e.code === 'Enter') {
      this.addComment();
    }
  };

  render() {
    let comments = this.state.comments;
    const commentList =
      comments &&
      comments.map(context => {
        const { id, userName, text } = context;
        return (
          <li className="comment" key={id}>
            <div className="name">{userName}</div>
            <div className="content">{text}</div>
          </li>
        );
      });

    return (
      <>
        <ul>{commentList}</ul>
        <span className="time">1 hours</span>
        <div className="commentArea">
          <input
            id="commentText"
            placeholder="댓글 달기..."
            value={this.state.context}
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
