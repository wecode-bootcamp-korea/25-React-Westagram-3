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
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: data['0'],
        });
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
      console.log(count);
    }
  };

  enterPress = e => {
    if (e.code === 'Enter') {
      this.addComment();
    }
  };
  render() {
    const comments = this.state.comments;
    const commentList = comments.map(context => {
      return (
        <li className="comment" key={context.id}>
          <div className="name">{context.userName}</div>
          <div className="content">{context.text}</div>
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
