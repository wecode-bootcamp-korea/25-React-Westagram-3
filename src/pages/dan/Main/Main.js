import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Feed from '../Main/Feed/Feed';
import '../Common.scss';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('./data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    const { feeds } = this.state;
    return (
      <div className="common">
        <Nav />
        <main className="main_container wrap">
          <aside>
            <div className="my_profile">
              <Link to="#n" className="profile_img">
                <img
                  alt="User profile image10"
                  className="round_img"
                  src="./images/dan/dan.jpg"
                />
              </Link>
              <span className="my_id">
                <Link to="#n" className="txt_id">
                  Dan_d
                </Link>
                <p>단디하자:D</p>
              </span>
            </div>

            <article className="widget stories">
              <div className="widget_ttl">
                <span>스토리</span>
                <Link to="#n">모두 보기</Link>
              </div>

              <section className="list_story">
                <div className="story">
                  <Link to="#n" className="follower_img">
                    <img
                      alt="follower profile image1"
                      className="round_img"
                      src="./images/dan/cat_01.png"
                    />
                  </Link>
                  <span className="user_id">
                    <Link to="#n" className="txt_id">
                      Fallowing ID
                    </Link>
                    <p>3h ago</p>
                  </span>
                </div>

                <div className="story">
                  <Link to="#n" className="follower_img">
                    <img
                      alt="follower profile image2"
                      className="round_img"
                      src="./images/dan/cat_02.png"
                    />
                  </Link>
                  <span className="user_id">
                    <Link to="#n" className="txt_id">
                      Fallowing ID
                    </Link>
                    <p>3h ago</p>
                  </span>
                </div>

                <div className="story">
                  <Link to="#n" className="follower_img">
                    <img
                      alt="follower profile image3"
                      className="round_img"
                      src="./images/dan/cat_03.png"
                    />
                  </Link>
                  <span className="user_id">
                    <Link to="#n" className="txt_id">
                      Fallowing ID
                    </Link>
                    <p>3h ago</p>
                  </span>
                </div>

                <div className="story">
                  <Link to="#n" className="follower_img">
                    <img
                      alt="follower profile image4"
                      className="round_img"
                      src="./images/dan/cat_04.png"
                    />
                  </Link>
                  <span className="user_id">
                    <Link to="#n" className="txt_id">
                      Fallowing ID
                    </Link>
                    <p>3h ago</p>
                  </span>
                </div>
              </section>
            </article>

            <article className="widget recommends">
              <div className="widget_ttl">
                <span>회원님을 위한 추천</span>
                <Link to="#n">모두 보기</Link>
              </div>

              <section className="list_recommend">
                <div className="recommend">
                  <Link to="#n" className="recommend_img">
                    <img
                      alt="follower profile image5"
                      className="round_img"
                      src="./images/dan/dog_01.png"
                    />
                  </Link>
                  <span className="user_id">
                    <Link to="#n" className="txt_id">
                      recommender ID
                    </Link>
                    <p>follwor list</p>
                  </span>
                  <button type="button">팔로우</button>
                </div>

                <div className="recommend">
                  <Link to="#n" className="recommend_img">
                    <img
                      alt="follower profile image6"
                      className="round_img"
                      src="./images/dan/dog_02.png"
                    />
                  </Link>
                  <span className="user_id">
                    <Link to="#n" className="txt_id">
                      recommender ID
                    </Link>
                    <p>follwor list</p>
                  </span>
                  <button type="button">팔로우</button>
                </div>

                <div className="recommend">
                  <Link to="#n" className="recommend_img">
                    <img
                      alt="follower profile image7"
                      className="round_img"
                      src="./images/dan/dog_03.png"
                    />
                  </Link>
                  <span className="user_id">
                    <Link to="#n" className="txt_id">
                      recommender ID
                    </Link>
                    <p>follwor list</p>
                  </span>
                  <button type="button">팔로우</button>
                </div>
              </section>
            </article>

            <nav className="menu">
              <ul>
                <li>
                  <Link to="#n">westagram 정보</Link>
                </li>
                <li>
                  <Link to="#n">지원</Link>
                </li>
                <li>
                  <Link to="#n">홍보센터</Link>
                </li>
                <li>
                  <Link to="#n">API</Link>
                </li>
                <li>
                  <Link to="#n">채용 정보</Link>
                </li>
                <li>
                  <Link to="#n">개인정보처리방침</Link>
                </li>
                <li>
                  <Link to="#n">약관</Link>
                </li>
                <li>
                  <Link to="#n">디렉터리</Link>
                </li>
                <li>
                  <Link to="#n">프로필</Link>
                </li>
                <li>
                  <Link to="#n">해시태그</Link>
                </li>
                <li>
                  <Link to="#n">언어</Link>
                </li>
              </ul>
            </nav>
            <p className="copyright">©. 2021 WESTAGRAM</p>
          </aside>

          <div className="feed_board">
            {feeds.map(feed => {
              return <Feed feed={feed} />;
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Main);
