import React from 'react';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
    };
  }

  canLike = () => {
    if (this.state.isLike) {
      this.setState({ isLike: false });
    } else {
      this.setState({ isLike: true });
    }
  };

  render() {
    const { isLike } = this.state;
    console.log(this.state);
    const comment = this.props.replList;
    const listItems = comment.map((addRepl, i) => (
      <li key={i}>
        <a href="" className="re_id">
          wecode_bootcamp
        </a>
        <span className="re_p">{addRepl}</span>
        <span className="delete">x</span>
        <i
          id={isLike ? 'like' : 'dislike'}
          className="far fa-heart"
          onClick={this.canLike}
        ></i>
      </li>
    ));
    return <ul>{listItems}</ul>;
  }
}

export default Comments;
