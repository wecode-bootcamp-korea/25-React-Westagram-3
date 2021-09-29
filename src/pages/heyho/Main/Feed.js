import React from 'react';
import Comment from './Comment';
import './Comment.scss';

class Feed extends React.Component {
  render() {
    const { replies, handleSubmit, newReply, textChange, feedData } =
      this.props;
    return (
      <div id="feeds">
        <div className="feedTop">
          <img
            alt={feedData}
            className="heyhoPic"
            src="/images/heyho/gotns.png"
          />
          <span>yo.heyho</span>
        </div>

        <article>
          <img
            alt="feedImage"
            className="goodDogPic"
            src="/images/heyho/goodmorning.jpeg"
          />
        </article>

        <section>
          <div className="icon-bar">
            <img alt="like" src="/images/heyho/heart.png" />
            <img alt="dialog" src="/images/heyho/bubble.png" />
            <img alt="export" src="/images/heyho/export.png" />
            <img alt="bookmark" src="/images/heyho/ribbon.png" />
          </div>

          <div>
            <span className="strong like">aineworld</span>님
            <span class="strong">외 5000명</span>이 좋아합니다
          </div>

          <ul>
            <li>
              <span className="userHani">HaniLove</span>
              <span>주인놈과 함께 셀카</span>
            </li>
          </ul>

          <ul>
            {replies.map(el => {
              console.log(el);
              return <Comment userName={el.userName} content={el.content} />;
            })}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="댓글달기..."
              onChange={textChange}
              value={newReply}
            />
            <button>게시</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Feed;
