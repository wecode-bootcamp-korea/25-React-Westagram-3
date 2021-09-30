import React from 'react';
import Comment from './comment';

class Feed extends React.Component {
  render() {
    const { id, writer, img, text, comment } = this.props;
    return (
      <article key={id}>
        <section className="writerArea">
          <div className="account">
            <img
              alt="user"
              src="https://ca.slack-edge.com/TH0U6FBTN-U02808S0GCF-31acdd48834c-512"
            />
            <div className="name">{writer}</div>
            <div className="address" />
          </div>
          <i className="fas fa-ellipsis-h" />
        </section>
        <img alt="feed_img" src={img} className="mainPhoto" />
        <section className="feedBtns">
          <div className="btnLeft">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="far fa-paper-plane" />
          </div>
          <i className="far fa-bookmark" />
        </section>
        <span className="likeCount">좋아요 12개</span>
        <div className="postArea">
          <a href className="name">
            {writer}
          </a>
          <span className="content">{text}</span>
          <button className="moreSee">More See</button>
        </div>
        <Comment feedId={id} comment={comment} />
      </article>
    );
  }
}

export default Feed;
