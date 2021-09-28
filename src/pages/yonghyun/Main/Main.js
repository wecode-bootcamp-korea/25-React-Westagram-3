import React from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import Feed from './Comments/Feeds';
import DG from './Comments/DG';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      repl: '',
      feedList: [],
      replList: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/FeedData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });

    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          replList: data,
        });
      });
  }

  render() {
    const { replList, feedList } = this.state;

    return (
      <>
        <Nav />
        <main>
          <div className="main">
            <div className="feeds">
              <div>
                <Feed feedList={feedList} />
              </div>
            </div>
            <DG replList={replList} />
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

export default Main;
