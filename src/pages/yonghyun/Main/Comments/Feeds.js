import React from 'react';
import '../Main.scss';

class Feeds extends React.Component {
  // goToLogin = () => {
  //   this.props.history.push('/login-YH');
  // };

  constructor(props) {
    super();
    this.state = {
      key: '',
      name: '',
      content: '',
      likeNum: '',
      isliked: '',
    };
  }

  canLike = () => {
    if (this.props.isLiked) {
      this.setState({ isLiked: false });
    } else {
      this.setState({ isLiked: true });
    }
  };

  render() {
    console.log(this.props);
    return (
      <article className="firstFeed">
        <header className="feedHead">
          <img
            id="feed_pic"
            alt="feedProfileIcon"
            src="/images/yonghyun/profile.jpeg"
            width="32px"
            height="32px"
          />
          <div className="user1">4.21ee</div>
        </header>
        <div className="threeDot">
          <button>
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="pics">
          <img id="firstPic" alt="mainPic" src="/images/yonghyun/feed4.jpeg" />
        </div>
        <div className="comment">
          <section className="heart2">
            <div className="icon_pack">
              <button className="likeBtn">
                <i id="emptyheart" className="far fa-heart"></i>
                <i
                  id={this.props.feedList.isliked ? 'redheart' : 'redheartX'}
                  className="fas fa-heart"
                  onClick={this.canLike}
                ></i>
              </button>
              <button>
                <i className="far fa-comment"></i>
              </button>
              <button>
                <i className="far fa-paper-plane"></i>
              </button>
              <button id="bookmark">
                <i className="far fa-bookmark"></i>
              </button>
            </div>
          </section>
          <section className="manyLike">
            <div>좋아요 1개</div>
          </section>
        </div>
      </article>
    );
  }
}

export default Feeds;
