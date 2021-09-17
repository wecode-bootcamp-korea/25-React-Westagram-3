import React from 'react';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main className="main-container">
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
              <img
                alt="sun"
                src="/images/beforesun/IMG_9155.png"
                width="100%"
              />
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
                    <img
                      alt="chat"
                      src="/images/beforesun/chat.png"
                      width="24px"
                    />
                  </button>
                  <button>
                    <img
                      alt="send"
                      src="/images/beforesun/send.png"
                      width="24px"
                    />
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
                />
                <button className="btn" type="button">
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
              <img
                alt="nari"
                src="/images/beforesun/IMG_5855.jpeg"
                width="100%"
              />
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
                    <img
                      alt="chat"
                      src="/images/beforesun/chat.png"
                      width="24px"
                    />
                  </button>
                  <button>
                    <img
                      alt="send"
                      src="/images/beforesun/send.png"
                      width="24px"
                    />
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
          <section className="side">
            <div className="side-user">
              <a href="#">
                <img alt="user-poto" src="/images/beforesun/IMG_8770.jpeg" />
              </a>
              <div className="side-my">
                <a href="#">ty_050</a>
                <span>태양</span>
              </div>
            </div>
            <div className="story-box">
              <div className="story-info">
                <div className="story-text">
                  <span>스토리</span>
                  <button type="button">모두 보기</button>
                </div>
                <div className="side-story">
                  <a href="#">
                    <img
                      alt="user-poto"
                      src="/images/beforesun/IMG_8847.jpeg"
                    />
                  </a>
                  <div className="side-my">
                    <a href="#">yooooona_</a>
                    <span>10분 전</span>
                  </div>
                </div>
                <div className="side-story">
                  <a href="#">
                    <img
                      alt="user-poto"
                      src="/images/beforesun/iOS 이미지 (1).jpg"
                    />
                  </a>
                  <div className="side-my">
                    <a href="#">Seyeon_14</a>
                    <span>1시간 전</span>
                  </div>
                </div>
                <div className="side-story">
                  <a href="#">
                    <img
                      alt="user-poto"
                      src="/images/beforesun/iOS 이미지.jpg"
                    />
                  </a>
                  <div className="side-my">
                    <a href="#">gh456</a>
                    <span>2시간 전</span>
                  </div>
                </div>
                <div className="side-story">
                  <a href="#">
                    <img
                      alt="user-poto"
                      src="/images/beforesun/20170623_194205.JPG"
                    />
                  </a>
                  <div className="side-my">
                    <a href="#">ImKing1</a>
                    <span>5시간 전</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="friend-box">
              <div className="story-text">
                <span>회원님을 위한 추천</span>
                <button>모두 보기</button>
              </div>
              <div className="side-story">
                <a href="#">
                  <img
                    alt="user-poto"
                    src="/images/beforesun/스크린샷 2021-09-08 오후 1.04.14.png"
                  />
                </a>
                <div className="side-my">
                  <a href="#">acid</a>
                  <span>wecode_bootcamp님 외 2명 ...</span>
                </div>
                <button type="button">팔로우</button>
              </div>
              <div className="side-story">
                <a href="#">
                  <img
                    alt="user-poto"
                    src="/images/beforesun/스크린샷 2021-09-08 오후 1.04.31.png"
                  />
                </a>
                <div className="side-my">
                  <a href="#">minminji</a>
                  <span>xodid157님 외 14명이 팔로우 ...</span>
                </div>
                <button type="button">팔로우</button>
              </div>
              <div className="side-story">
                <a href="#">
                  <img
                    alt="user-poto"
                    src="/images/beforesun/스크린샷 2021-09-08 오후 1.04.42.png"
                  />
                </a>
                <div className="side-my">
                  <a href="#">Sooyeon_06</a>
                  <span>yooooona_님 외 3명이 팔로우...</span>
                </div>
                <button type="button">팔로우</button>
              </div>
            </div>
            <div className="footer">
              <div className="footer-text1">
                <span>Instagram </span>
                <a href="#">정보 ・ </a>
                <a href="#">지원 ・ </a>
                <a href="#">홍보 센터 ・ </a>
                <a href="#">API ・ </a>
              </div>
              <div className="footer-text2">
                <a href="#">채용정보 ・ </a>
                <a href="#">개인정보처리방침 ・ </a>
                <a href="#">약관 ・ </a>
              </div>
              <div className="footer-text3">
                <a href="#">디렉터리 ・ </a>
                <a href="#">프로필 ・ </a>
                <a href="#">해시태그 ・ </a>
                <a href="#">언어 ・ </a>
              </div>
              <div className="footer-text4">
                <span>© 2019 INSTAGRAM</span>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
export default withRouter(Main);
