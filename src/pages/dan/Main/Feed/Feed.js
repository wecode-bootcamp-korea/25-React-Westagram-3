import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../Feed/Comment/CommentList';

class Feed extends React.Component {
  render() {
    return (
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
            건방진 고양이. 나의 찍찍 펀치를 받아라. <br /> 건방진 고양이. 나의
            찍찍 펀치를 받아라. 건방진 고양이. 나의 찍찍 펀치를 받아라. 건방진
            고양이. 나의 찍찍 펀치를 받아라. 건방진 고양이. 나의 찍찍 펀치를
            받아라.
          </span>
          <Link to="#n" className="more">
            더보기
          </Link>
        </section>

        <CommentList />
      </article>
    );
  }
}
export default Feed;
