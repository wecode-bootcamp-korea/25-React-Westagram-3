import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="navigator">
            <div className="nav-interface">
              <div className="nav-left">
                <a className="logo-text" href="main-HH">
                  Westagram
                </a>
              </div>
              <input className="search" type="text" placeholder="검색" />
              <div className="nav-right">
                <a href="#">
                  <img
                    alt="compass"
                    className="compass"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  />
                </a>
                <a href="#">
                  <img
                    alt="heart"
                    className="heart"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </a>
                <a href="#">
                  <img
                    alt="profile"
                    className="profile"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  />
                </a>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Nav;
