import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../Feed/Comment/CommentList';
import './Feed.scss';

class Feed extends React.Component {
  render() {
    const { feed } = this.props;
    return (
      <article className="feed">
        <div className="new_poster">
          <Link to="#n" className="poster_img">
            <img alt="user profile" className="round_img" src={feed.feedImg} />
          </Link>
          <Link to="#n" className="poster_id txt_id">
            {feed.userName}
          </Link>
          <button>
            <i className="fas fa-ellipsis-h"></i>옵션 더보기
          </button>
        </div>
        <section className="feed_imgs">
          <img alt={feed.feedImgAlt} src={feed.feedImg} />
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
                alt="like user images"
                className="round_img"
                src="./images/dan/cat_01.png"
              />
              <span className="txt_id">강당당</span>
            </Link>
            님
            <Link to="#n" className="like_num txt_id">
              외 {feed.getLiked}명
            </Link>
            이 좋아합니다
          </p>
        </section>

        <section className="feed_txt">
          <Link to="#n" className="txt_id">
            {feed.userName}
          </Link>
          <span>{feed.feedText}</span>
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
