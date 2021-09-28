import React from 'react';
import './Side.scss';

class Side extends React.Component {
  render() {
    return (
      <section className="side">
        <div className="side-user">
          <a href="#x">
            <img alt="user-poto" src="/images/beforesun/IMG_8770.jpeg" />
          </a>
          <div className="side-my">
            <a href="#x">ty_050</a>
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
              <a href="#x">
                <img alt="user-poto" src="/images/beforesun/IMG_8847.jpeg" />
              </a>
              <div className="side-my">
                <a href="#x">yooooona_</a>
                <span>10분 전</span>
              </div>
            </div>
            <div className="side-story">
              <a href="#x">
                <img
                  alt="user-poto"
                  src="/images/beforesun/iOS 이미지 (1).jpg"
                />
              </a>
              <div className="side-my">
                <a href="#x">Seyeon_14</a>
                <span>1시간 전</span>
              </div>
            </div>
            <div className="side-story">
              <a href="#x">
                <img alt="user-poto" src="/images/beforesun/iOS 이미지.jpg" />
              </a>
              <div className="side-my">
                <a href="#x">gh456</a>
                <span>2시간 전</span>
              </div>
            </div>
            <div className="side-story">
              <a href="#x">
                <img
                  alt="user-poto"
                  src="/images/beforesun/20170623_194205.JPG"
                />
              </a>
              <div className="side-my">
                <a href="#x">ImKing1</a>
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
            <a href="#x">
              <img
                alt="user-poto"
                src="/images/beforesun/스크린샷 2021-09-08 오후 1.04.14.png"
              />
            </a>
            <div className="side-my">
              <a href="#x">acid</a>
              <span>wecode_bootcamp님 외 2명 ...</span>
            </div>
            <button type="button">팔로우</button>
          </div>
          <div className="side-story">
            <a href="#x">
              <img
                alt="user-poto"
                src="/images/beforesun/스크린샷 2021-09-08 오후 1.04.31.png"
              />
            </a>
            <div className="side-my">
              <a href="#x">minminji</a>
              <span>xodid157님 외 14명이 팔로우 ...</span>
            </div>
            <button type="button">팔로우</button>
          </div>
          <div className="side-story">
            <a href="#x">
              <img
                alt="user-poto"
                src="/images/beforesun/스크린샷 2021-09-08 오후 1.04.42.png"
              />
            </a>
            <div className="side-my">
              <a href="#x">Sooyeon_06</a>
              <span>yooooona_님 외 3명이 팔로우...</span>
            </div>
            <button type="button">팔로우</button>
          </div>
        </div>
        <div className="footer">
          <div className="footer-text1">
            <span>Instagram </span>
            <a href="#x">정보 ・ </a>
            <a href="#x">지원 ・ </a>
            <a href="#x">홍보 센터 ・ </a>
            <a href="#x">API ・ </a>
          </div>
          <div className="footer-text2">
            <a href="#x">채용정보 ・ </a>
            <a href="#x">개인정보처리방침 ・ </a>
            <a href="#x">약관 ・ </a>
          </div>
          <div className="footer-text3">
            <a href="#x">디렉터리 ・ </a>
            <a href="#x">프로필 ・ </a>
            <a href="#x">해시태그 ・ </a>
            <a href="#x">언어 ・ </a>
          </div>
          <div className="footer-text4">
            <span>© 2019 INSTAGRAM</span>
          </div>
        </div>
      </section>
    );
  }
}
export default Side;
