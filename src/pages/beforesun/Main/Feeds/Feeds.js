import React from 'react';
import './Feeds.scss';
import Comment from './Comment/Comment';
class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      comments: [],
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
      e.target.value = '';
    }
  };
  // 버튼 클릭시 댓글 state변경 후 다시 빈글자로 변환
  handleComment = () => {
    this.setState({
      comments: this.state.comments.concat({
        comment: this.state.comment,
      }),
      comment: '',
    });
  };
  render() {
    return (
      <section className="feeds">
        <article className="feeds-content">
          <div className="title">
            <div className="my-box">
              <a href="#">
                <img alt="my-poto" src="/images/beforesun/IMG_8770.jpeg" />
              </a>
              <div className="my-info">
                <a href="#">ty_050</a>
                <p>Seoul, Korea</p>
              </div>
            </div>
            <a href="#">
              <img alt="more" src="/images/beforesun/more.png" />
            </a>
          </div>
          <img alt="sun" src="/images/beforesun/IMG_9155.png" width="100%" />
          <div className="icon-box">
            <div className="icon-left">
              <button>
                <img
                  alt="heart"
                  className="heart-red"
                  src="/images/beforesun/heart.png"
                  width="24px"
                />
              </button>
              <button>
                <img alt="chat" src="/images/beforesun/chat.png" width="24px" />
              </button>
              <button>
                <img alt="send" src="/images/beforesun/send.png" width="24px" />
              </button>
            </div>
            <div className="icon-right">
              <button>
                <img
                  alt="save"
                  src="/images/beforesun/ribbon.png"
                  width="24px"
                />
              </button>
            </div>
          </div>
          <div className="like-box">
            <a href="#">
              <img
                className="user-poto"
                alt="user-poto"
                src="/images/beforesun/IMG_8847.jpeg"
              />
            </a>
            <a href="#">yooooona_</a>
            <span>님</span>
            <a className="" href="#">
              외 97명
            </a>
            <span>이 좋아합니다</span>
          </div>
          <div className="comment">
            <div className="comment-first">
              <a className="my-name" href="#">
                ty_050
              </a>
              <span> 오랜만에 전시회 📷 ... </span>
              <a className="more" href="#">
                더 보기
              </a>
            </div>
            <div className="comment-second">
              <div className="yous">
                <a className="you-name" href="#">
                  yooooona_
                </a>
                <span className="comment-writ"> 여기 어디야?? </span>
              </div>
              <img
                alt="heart-like"
                className="heart-like"
                src="/images/beforesun/heart.png"
              />
            </div>
            <ul>
              <Comment comments={this.state.comments} />
            </ul>
            <div className="empty-comment"></div>
            <div className="comment-time">
              <a href="#"> 1시간 전</a>
            </div>
          </div>
          <div className="comment-box">
            <input
              className="comment-text"
              type="text"
              placeholder="댓글 달기..."
              onChange={this.textChange}
              onKeyPress={this.handleKeyPress}
            />
            <button
              className="btn"
              type="button"
              onClick={
                this.state.comment.length > 1 ? this.handleComment : undefined
              }
            >
              게시
            </button>
          </div>
        </article>
        <article className="feeds-content">
          <div className="title">
            <div className="my-box">
              <a href="#">
                <img alt="my-poto" src="/images/beforesun/IMG_8770.jpeg" />
              </a>
              <div className="my-info">
                <a href="#">ty_050</a>
                <p>Seoul, Korea</p>
              </div>
            </div>
            <a href="#">
              <img alt="more" src="/images/beforesun/more.png" />
            </a>
          </div>
          <img alt="nari" src="/images/beforesun/IMG_5855.jpeg" width="100%" />
          <div className="icon-box">
            <div className="icon-left">
              <button>
                <img
                  alt="heart"
                  className="heart-red"
                  src="/images/beforesun/heart.png"
                  width="24px"
                />
              </button>
              <button>
                <img alt="chat" src="/images/beforesun/chat.png" width="24px" />
              </button>
              <button>
                <img alt="send" src="/images/beforesun/send.png" width="24px" />
              </button>
            </div>
            <div className="icon-right">
              <button>
                <img
                  alt="save"
                  src="/images/beforesun/ribbon.png"
                  width="24px"
                />
              </button>
            </div>
          </div>
          <div className="like-box">
            <a href="#">
              <img
                className="user-poto"
                alt="user-poto"
                src="/images/beforesun/99907366-DFD9-4C97-A7E6-789CB4D01B3F_1_105_c.jpeg"
              />
            </a>
            <a href="#">seock_hyun97</a>
            <span>님</span>
            <a href="#">외 60명</a>
            <span>이 좋아합니다</span>
          </div>
          <div className="comment">
            <div className="comment-first">
              <a className="my-name" href="#">
                ty_050
              </a>
              <span> 너무 귀여운 우리집 실세 이뻐서 올... </span>
              <a className="more" href="#">
                더 보기
              </a>
            </div>
            <div className="comment-second">
              <div className="yous">
                <a className="you-name" href="#">
                  wecode_bootcamp
                </a>
                <span className="comment-writ">
                  {' '}
                  고양We에도 많이 올려주세요!{' '}
                </span>
              </div>
              <img
                alt="heart-like"
                className="heart-like"
                src="/images/beforesun/heart.png"
              />
            </div>
            <div className="empty-comment"></div>
            <div className="comment-time">
              <a href="#"> 2시간 전</a>
            </div>
          </div>
          <div className="comment-box">
            <input
              className="comment-text"
              type="text"
              placeholder="댓글 달기..."
            />
            <button className="btn" type="button">
              게시
            </button>
          </div>
        </article>
      </section>
    );
  }
}
export default Feeds;
