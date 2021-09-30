import React from 'react';
import { Link } from 'react-router-dom';
import './Side.scss';

class Side extends React.Component {
  render() {
    return (
      <section className="side">
        <div className="side-user">
          <Link to="#">
            <img alt="user-poto" src="/images/beforesun/IMG_8770.jpeg" />
          </Link>
          <div className="side-my">
            <Link to="#">ty_050</Link>
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
              <Link to="#">
                <img alt="user-poto" src="/images/beforesun/IMG_8847.jpeg" />
              </Link>
              <div className="side-my">
                <Link to="#">yooooona_</Link>
                <span>10분 전</span>
              </div>
            </div>
            <div className="side-story">
              <Link to="#">
                <img
                  alt="user-poto"
                  src="/images/beforesun/iOS 이미지 (1).jpg"
                />
              </Link>
              <div className="side-my">
                <Link to="#">Seyeon_14</Link>
                <span>1시간 전</span>
              </div>
            </div>
            <div className="side-story">
              <Link to="#">
                <img alt="user-poto" src="/images/beforesun/iOS 이미지.jpg" />
              </Link>
              <div className="side-my">
                <Link to="#">gh456</Link>
                <span>2시간 전</span>
              </div>
            </div>
            <div className="side-story">
              <Link to="#">
                <img
                  alt="user-poto"
                  src="/images/beforesun/20170623_194205.JPG"
                />
              </Link>
              <div className="side-my">
                <Link to="#">ImKing1</Link>
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
            <Link to="#">
              <img
                alt="user-poto"
                src="/images/beforesun/스크린샷 2021-09-08 오후 1.04.14.png"
              />
            </Link>
            <div className="side-my">
              <Link to="#">acid</Link>
              <span>wecode_bootcamp님 외 2명이 팔로우를 하고 있습니다.</span>
            </div>
            <button type="button">팔로우</button>
          </div>
          <div className="side-story">
            <Link to="#">
              <img
                alt="user-poto"
                src="/images/beforesun/스크린샷 2021-09-08 오후 1.04.31.png"
              />
            </Link>
            <div className="side-my">
              <Link to="#">minminji</Link>
              <span>xodid157님 외 14명이 팔로우를 하고 있습니다.</span>
            </div>
            <button type="button">팔로우</button>
          </div>
          <div className="side-story">
            <Link to="#">
              <img
                alt="user-poto"
                src="/images/beforesun/스크린샷 2021-09-08 오후 1.04.42.png"
              />
            </Link>
            <div className="side-my">
              <Link to="#">Sooyeon_06</Link>
              <span>yooooona_님 외 3명이 팔로우를 하고 있습니다.</span>
            </div>
            <button type="button">팔로우</button>
          </div>
        </div>
        <div className="footer">
          <div className="footer-text">
            <span>Instagram </span>
            <Link to="#">정보 ・ </Link>
            <Link to="#">지원 ・ </Link>
            <Link to="#">홍보 센터 ・ </Link>
            <Link to="#">API ・ </Link>
          </div>
          <div className="footer-text">
            <Link to="#">채용정보 ・ </Link>
            <Link to="#">개인정보처리방침 ・ </Link>
            <Link to="#">약관 ・ </Link>
          </div>
          <div className="footer-text">
            <Link to="#">디렉터리 ・ </Link>
            <Link to="#">프로필 ・ </Link>
            <Link to="#">해시태그 ・ </Link>
            <Link to="#">언어 ・ </Link>
          </div>
          <div className="footer-text-last">
            <span>© 2019 INSTAGRAM</span>
          </div>
        </div>
      </section>
    );
  }
}
export default Side;
