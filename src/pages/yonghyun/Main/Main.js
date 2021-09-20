import React from 'react';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import { withRouter } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';

class Main extends React.Component {
  goToLogin = () => {
    this.props.history.push('/login-YH');
  };

  render() {
    return (
      <>
        {/* <nav className="menu">
          <div className="topMenu">
            <div className="leftLogo">
              <img
                id="insta"
                alt="instaLogo"
                onClick={this.goToLogin}
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              />
            </div>
            <div className="search">
              <div className="searchInput">
                <input
                  className="searchBox"
                  type="search"
                  placeholder="검색"
                  onFocus="this.placeholder=''"
                  onBlur="this.placeholder='검색'"
                />
              </div>
            </div>
            <div className="rightMenu">
              <img
                className="like"
                alt="compassIcon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
              <img
                className="like"
                alt="heartIcon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                className="like"
                alt="peopleIcon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
              <img
                className="like"
                id="more"
                alt="profileImageIcon"
                src="/images/profile.jpeg"
                width="32px"
                height="32px"
              />
              <div className="like">
                {/* <div className="profileList">
                            <ul>
                                <li><p><i className="fas fa-user-alt"></i></p>프로필</li>
                                <li><p><i className="far fa-bookmark"></i></p>저장됨</li>
                                <li><p><i className="fas fa-cog"></i></p>설정</li>
                                <li><p><i className="fas fa-undo"></i></p>계정 전환</li>
                                <li>로그아웃</li>
                            </ul>
                        </div> */}
        {/* </div>
            </div>
          </div>
        </nav> */}
        <Nav />
        <main>
          <div className="main">
            <div className="feeds">
              <div>
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
                    <img
                      id="firstPic"
                      alt="mainPic"
                      src="/images/yonghyun/sky.jpeg"
                    />
                  </div>
                  <div className="comment">
                    <section className="heart2">
                      <div className="icon_pack">
                        <button className="likeBtn">
                          <i id="emptyheart" className="far fa-heart"></i>
                          <i id="redheart" className="fas fa-heart"></i>
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
                      <div>좋아요 485,222개</div>
                    </section>
                    <div className="comments_head">
                      <p className="commentFeeds">
                        <a href="" className="re_id">
                          4.21ee
                        </a>
                        <span className="re_p"> 큰일났다 벌써졸림 </span>
                      </p>
                    </div>
                    <div className="comments">
                      <div className="commentFeed" id="other_re">
                        <ul className="feedComment">
                          <ul id="addR"></ul>
                        </ul>
                      </div>
                    </div>
                    <div className="howLong">
                      <div>25분전</div>
                    </div>
                    <section className="write">
                      <button>
                        <i className="far fa-smile"></i>
                      </button>
                      <input
                        id="writeComment"
                        type="text"
                        placeholder="댓글 달기..."
                      />
                      <button id="writeBtn">게시</button>
                    </section>
                  </div>
                </article>
              </div>
            </div>
            <div className="main-right">
              <div className="my_id">
                <div className="story">
                  <img
                    className="id_pic"
                    src="/images/yonghyun/profile.jpeg"
                    width="57px"
                    height="57px"
                    alt=""
                  />
                </div>
                <div className="pic_name">
                  <div className="pic_id">4.21ee</div>
                  <div className="pic_desc">YONGHYUN</div>
                </div>
                <button className="changeProfile">전환</button>
              </div>
              <div className="friends_list">
                <div className="friends_text">
                  <p>회원님을 위한 추천</p>
                </div>
                <div className="friends_desc">
                  <div className="people">
                    <img
                      className="friends_pic"
                      alt="recommend1"
                      src="/images/yonghyun/profile.jpeg"
                      width="32px"
                      height="32px"
                    />
                    <div className="friends_name">
                      <div className="friends_id">1st_id</div>
                      <div className="friendsdesc">회원님을 위한 추천</div>
                    </div>
                    <button className="follow">팔로우</button>
                  </div>
                  <div className="people">
                    <img
                      className="friends_pic"
                      alt="recommend2"
                      src="/images/yonghyun/profile.jpeg"
                      width="32px"
                      height="32px"
                    />
                    <div className="friends_name">
                      <div className="friends_id">dydgus0421</div>
                      <div className="friendsdesc">Instagram 신규가입</div>
                    </div>
                    <button className="follow">팔로우</button>
                  </div>
                  <div className="people">
                    <img
                      className="friends_pic"
                      alt="recommend3"
                      src="/images/yonghyun/profile.jpeg"
                      width="32px"
                      height="32px"
                    />
                    <div className="friends_name">
                      <div className="friends_id">second_id</div>
                      <div className="friendsdesc">회원님을 위한 추천</div>
                    </div>
                    <button className="follow">팔로우</button>
                  </div>
                  <div className="people">
                    <img
                      className="friends_pic"
                      alt="recommend4"
                      src="/images/yonghyun/profile.jpeg"
                      width="32px"
                      height="32px"
                    />
                    <div className="friends_name">
                      <div className="friends_id">asfsdk</div>
                      <div className="friendsdesc">회원님을 위한 추천</div>
                    </div>
                    <button className="follow">팔로우</button>
                  </div>
                  <div className="people">
                    <img
                      className="friends_pic"
                      alt="recommend5"
                      src="/images/yonghyun/profile.jpeg"
                      width="32px"
                      height="32px"
                    />
                    <div className="friends_name">
                      <div className="friends_id">kyh0421</div>
                      <div className="friendsdesc">회원님을 위한 추천</div>
                    </div>
                    <button className="follow">팔로우</button>
                  </div>
                </div>
              </div>
              <div className="desc">
                <nav id="etc">
                  <p>소개-도움말-홍보 센터-API-채용-정보-개인정보처리방침</p>
                  <p>약관-위치-인기 계정-해시태그-언어</p>
                </nav>
                <p id="instaface">2021 INSTAGRAM FROM FACEBOOK</p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default withRouter(Main);
