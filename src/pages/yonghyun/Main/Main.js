import React from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import Feed from './Comments/Feed';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/FeedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const feedL = this.state.feedList.map(a => {
      const { id, userName, content, likeNumber, isLiked, when } = a;
      return (
        <Feed
          id={id}
          userName={userName}
          content={content}
          likeNumber={likeNumber}
          isLiked={isLiked}
          when={when}
        />
      );
    });
    return (
      <>
        <Nav />
        <main>
          <div className="main">
            <div className="feeds">
              <div>
                <article className="firstFeed">{feedL}</article>
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
                      src="/images/yonghyun/feed3.jpeg"
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
                      src="/images/yonghyun/feed2.jpeg"
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
                      src="/images/yonghyun/wecode.jpg"
                      width="32px"
                      height="32px"
                    />
                    <div className="friends_name">
                      <div className="friends_id">Hy_un</div>
                      <div className="friendsdesc">회원님을 위한 추천</div>
                    </div>
                    <button className="follow">팔로우</button>
                  </div>
                  <div className="people">
                    <img
                      className="friends_pic"
                      alt="recommend5"
                      src="/images/yonghyun/house.jpg"
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

export default Main;
