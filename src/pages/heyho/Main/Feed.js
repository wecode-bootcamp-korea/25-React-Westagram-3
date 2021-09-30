import React from 'react';
import Comment from './Comment';
import './Comment.scss';

class Feed extends React.Component {
  constructor() {
    super();

    this.state = {
      newReply: '',
      replies: [],
      // userName: '',
      // content: '',
    };
  }
  textChange = e => {
    this.setState({
      newReply: e.target.value,
    });
  };

  handleSubmit = e => {
    const { newReply, replies } = this.state;
    e.preventDefault();
    if (newReply) {
      this.setState({
        replies: replies.concat({
          userName: 'yo.heyho',
          content: newReply,
        }),
        newReply: '',
      });
    }
  };
  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          replies: data,
        });
      });
  }
  render() {
    const { abc } = this.props;
    return (
      <div id="feeds">
        <div className="feedTop">
          <img alt={abc} className="heyhoPic" src="/images/heyho/gotns.png" />
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
            {this.state.replies.map(el => {
              return (
                <Comment
                  content={el.content}
                  userName={el.userName}
                  id={el.id}
                />
              );
            })}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="댓글달기..."
              onChange={this.textChange}
              value={this.state.newReply}
            />
            <button>게시</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Feed;
