import React from 'react';
import DG from './DG';
import '../Main.scss';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      content: '',
      userName: '4.21ee',
      replList: [],
      id: 5,
    };
  }

  canLike = () => {
    if (this.state.like) {
      this.setState({ like: false });
    } else {
      this.setState({ like: true });
    }
  };

  addRepl = e => {
    this.setState({
      content: e.target.value,
    });
  };

  enterBtn = e => {
    const { content } = this.state;
    if (e.key === 'Enter' && content.trim()) {
      this.addComment();
      e.target.value = '';
    }
  };

  addComment = () => {
    const { content, replList, userName } = this.state;
    if (content.trim() === '' || content === '') {
      return;
    }
    this.setState({
      replList: replList.concat({
        id: this.state.id++,
        userName: userName,
        content: content.trim(),
      }),
      content: '',
    });
  };

  clearInput = () => {
    this.setState({
      content: '',
      like: false,
    });
  };

  componentDidMount() {
    this.setState({
      replList: this.props.comment,
    });
  }

  render() {
    const { id, userName, content, likeNumber, when } = this.props;
    const { like } = this.state;
    const replL = this.state.replList.map(a => {
      const { id, userName, content } = a;
      return <DG id={id} userName={userName} content={content} />;
    });

    console.log(this.state);
    return (
      <>
        <header className="feedHead" key={id}>
          <img
            id="feed_pic"
            alt="feedProfileIcon"
            src="/images/yonghyun/profile.jpeg"
            width="32px"
            height="32px"
          />
          <div className="user1">{userName}</div>
        </header>
        <div className="threeDot">
          <button>
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="pics">
          <img id="firstPic" alt="mainPic" src={content} />
        </div>
        <div className="comment">
          <section className="heart2">
            <div className="icon_pack">
              <button className="likeBtn">
                <i id="emptyheart" className="far fa-heart"></i>
                <i
                  id={like ? 'redheart' : 'redheartX'}
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
            <div>좋아요 {likeNumber}개</div>
          </section>
        </div>
        <div className="comments_head">
          <p className="commentFeeds">
            <a href="" className="re_id">
              4.21ee
            </a>
            <span className="re_p"> 피드를 만들어 보겠습니다!!! </span>
          </p>
        </div>
        <div className="comments">
          <div className="commentFeed" id="other_re">
            <ul className="feedComment">
              <ul id="addR">{replL}</ul>
            </ul>
          </div>
        </div>
        <div className="howLong">
          <div>{when}</div>
        </div>
        <section className="write">
          <button>
            <i className="far fa-smile"></i>
          </button>
          <input
            id="writeComment"
            type="text"
            placeholder="댓글 달기..."
            onChange={this.addRepl}
            onKeyPress={this.enterBtn}
            value={this.state.content}
          />
          <button id="writeBtn" onClick={this.addComment}>
            게시
          </button>
        </section>
      </>
    );
  }
}

export default Feed;
