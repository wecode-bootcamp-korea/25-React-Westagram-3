import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main className="container wrap">
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
                  My ID
                </Link>
                <p>My Nickname</p>
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
            <article className="feed">
              <div className="new_poster">
                <Link to="#n" className="poster_img">
                  <img
                    alt="follower profile image8"
                    className="round_img"
                    src="./images/dan/fallowing.png"
                  />
                </Link>
                <Link to="#n" className="poster_id txt_id">
                  Following ID
                </Link>
                <button>
                  <i className="fas fa-ellipsis-h"></i>옵션 더보기
                </button>
              </div>

              <section className="feed_imgs">
                <img alt="햄스터 사진" src="./images/dan/cute_01.png" />
                <div className="interactions">
                  <div className="my_emotion">
                    <button type="button">
                      <i className="far fa-heart"></i>like
                    </button>
                    <button type="button">
                      <i className="far fa-comment"></i>write_comment
                    </button>
                    <button type="button">
                      <i className="far fa-paper-plane"></i>send_DM
                    </button>
                  </div>
                  <div className="pagnation"></div>
                  <button type="button" className="bookmark">
                    <i className="far fa-bookmark"></i>bookmark
                  </button>
                </div>
                <p>
                  <Link to="#n" className="like_user">
                    <img
                      alt="like user imagev"
                      className="round_img"
                      src="./images/dan/cat_01.png"
                    />
                    <span className="txt_id">강당당</span>
                  </Link>
                  님
                  <Link to="#n" className="like_num txt_id">
                    외 10명
                  </Link>
                  이 좋아합니다
                </p>
              </section>

              <section className="feed_txt">
                <Link to="#n" className="txt_id">
                  User ID
                </Link>
                <span>
                  건방진 고양이. 나의 찍찍 펀치를 받아라. <br /> 건방진 고양이.
                  나의 찍찍 펀치를 받아라. 건방진 고양이. 나의 찍찍 펀치를
                  받아라. 건방진 고양이. 나의 찍찍 펀치를 받아라. 건방진 고양이.
                  나의 찍찍 펀치를 받아라.
                </span>
                <Link to="#n" className="more">
                  더보기
                </Link>
              </section>

              <div className="comments">
                <div id="listComment" className="list_comment">
                  <p className="txt_comment">
                    <span>
                      <Link to="#n" className="txt_id">
                        follow ID
                      </Link>
                      <span>나는 냥냥</span>
                    </span>
                    <button id="delete" type="button">
                      X
                    </button>
                  </p>
                </div>
                <form id="post" className="post_comment">
                  <textarea
                    id="newComment"
                    type="in"
                    placeholder="댓글 달기..."
                  ></textarea>
                  <button id="btnPost" type="submit">
                    게시
                  </button>
                </form>
              </div>
            </article>
          </div>
        </main>
      </>
    );
  }
}

export default withRouter(Main);
