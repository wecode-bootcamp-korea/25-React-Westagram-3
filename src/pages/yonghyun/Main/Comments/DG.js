import React from 'react';
import '../Main.scss';

class DG extends React.Component {
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
    const { id, userName, content } = this.props;
    const { isLike } = this.state;
    return (
      <>
        <li key={id}>
          <a className="re_id" href="#">
            {userName}
          </a>
          <span className="re_p">{content}</span>
          <span className="delete">x</span>
          <span className="likeH">
            <i
              id={isLike ? 'like' : 'dislike'}
              className="far fa-heart"
              onClick={this.canLike}
            ></i>
          </span>
        </li>
      </>
    );
  }
}

export default DG;
