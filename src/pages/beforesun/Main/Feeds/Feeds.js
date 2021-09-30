import React from 'react';
import './Feeds.scss';
import Comment from './Comment/Comment';
import { Link } from 'react-router-dom';
class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }
  textChange = e => {
    this.setState({
      comment: e.target.value,
    });
  };
  // 엔터키 활성화및 초기화
  handleKeyPress = e => {
    const { comment } = this.state;
    if (e.key === 'Enter' && comment.length > 1) {
      this.handleComment();
    }
  };
  // 버튼 클릭시 댓글 state변경 후 다시 빈글자로 변환
  handleComment = () => {
    const { comment, commentList } = this.state;
    this.setState({
      commentList: commentList.concat({
        userName: 'ty_050 ',
        content: comment,
      }),
      comment: '',
    });
  };
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
  render() {
    const {
      id,
      subAlt,
      subSrc,
      feedUserId,
      location,
      mainAlt,
      mainSrc,
      heartAlt,
      heartSrc,
      heartName,
      heartNum,
      feedText,
      time,
      comments,
    } = this.props;
    const { comment } = this.state;
    return (
      <section className="feeds" key={id}>
        <article className="feeds-content">
          <div className="title">
            <div className="my-box">
              <Link to="#">
                <img alt={subAlt} src={subSrc} />
              </Link>
              <div className="my-info">
                <Link to="#">{feedUserId}</Link>
                <p>{location}</p>
              </div>
            </div>
            <Link to="#">
              <img alt="more" src="/images/beforesun/more.png" />
            </Link>
          </div>
          <img alt={mainAlt} src={mainSrc} />
          <div className="icon-box">
            <div className="icon-left">
              <button>
                <img
                  alt="heart"
                  className="heart-red"
                  src="/images/beforesun/heart.png"
                />
              </button>
              <button>
                <img alt="chat" src="/images/beforesun/chat.png" />
              </button>
              <button>
                <img alt="send" src="/images/beforesun/send.png" />
              </button>
            </div>
            <div className="icon-right">
              <button>
                <img alt="save" src="/images/beforesun/ribbon.png" />
              </button>
            </div>
          </div>
          <div className="like-box">
            <Link to="#">
              <img className="user-poto" alt={heartAlt} src={heartSrc} />
            </Link>
            <Link to="#">{heartName}</Link>
            <span>님</span>
            <Link to="#">외 {heartNum}명</Link>
            <span>이 좋아합니다</span>
          </div>
          <div className="comment">
            <div className="comment-first">
              <Link to="#" className="my-name">
                {feedUserId}
              </Link>
              <span> {feedText} ... </span>
              <Link className="more" to="#">
                더 보기
              </Link>
            </div>
            <ul>
              {comments &&
                comments.map(comment => {
                  return (
                    <Comment
                      userName={comment.userName}
                      content={comment.content}
                      key={comment.id}
                    />
                  );
                })}
            </ul>
            <div className="empty-comment"></div>
            <div className="comment-time">
              <Link to="#"> {time}시간 전</Link>
            </div>
          </div>
          <div className="comment-box">
            <input
              className="comment-text"
              type="text"
              placeholder="댓글 달기..."
              value={comment}
              onChange={this.textChange}
              onKeyPress={this.handleKeyPress}
            />
            <button
              className="btn"
              type="button"
              onClick={comment.length > 1 ? this.handleComment : undefined}
            >
              게시
            </button>
          </div>
        </article>
      </section>
    );
  }
}
export default Feeds;
