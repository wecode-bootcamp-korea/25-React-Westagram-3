import React from 'react';
import { Link } from 'react-router-dom';
import '../Main.scss';

class Right extends React.Component {
  render() {
    return (
      <>
        <div className="main-right">
          <div className="my_id">
            <div className="story">
              <img
                className="id_pic"
                src="/images/yonghyun/profile.jpeg"
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
              <p>
                <Link className="link" to="#n">
                  소개
                </Link>
                -
                <Link className="link" to="#n">
                  도움말
                </Link>
                -
                <Link className="link" to="#n">
                  홍보 센터
                </Link>
                -
                <Link className="link" to="#n">
                  API
                </Link>
                -
                <Link className="link" to="#n">
                  채용
                </Link>
                -
                <Link className="link" to="#n">
                  정보
                </Link>
                -
                <Link className="link" to="#n">
                  개인정보처리방침
                </Link>
              </p>
              <p>
                <Link className="link" to="#n">
                  약관
                </Link>
                -
                <Link className="link" to="#n">
                  위치
                </Link>
                -
                <Link className="link" to="#n">
                  인기 계정
                </Link>
                -
                <Link className="link" to="#n">
                  해시태그
                </Link>
                -
                <Link className="link" to="#n">
                  소개
                </Link>
              </p>
            </nav>
            <p id="instaface">2021 INSTAGRAM FROM FACEBOOK</p>
          </div>
        </div>
      </>
    );
  }
}

export default Right;
