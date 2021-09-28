import React from 'react';
import '../Main.scss';

class DG extends React.Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
      repl: '',
      replList: [],
    };
  }

  canLike = () => {
    if (this.state.isLike) {
      this.setState({ isLike: false });
    } else {
      this.setState({ isLike: true });
    }
  };

  addRepl = e => {
    this.setState({
      repl: e.target.value,
    });
  };

  enterBtn = e => {
    const { repl } = this.state;
    if (e.key === 'Enter' && repl.length > 1) {
      this.addComment();
      e.target.value = '';
    }
  };

  clickBtn = e => {
    const { repl } = this.state;
    if (repl.length > 1) {
      this.addComment();
    }
  };

  addComment = () => {
    this.setState({
      replList: this.state.replList.concat({
        repl: this.state.repl,
      }),
      repl: '',
    });
  };

  clearInput = () => {
    this.setState({
      repl: '',
    });
  };

  render() {
    return (
      <>
        <div className="comments_head">
          <p className="commentFeeds">
            <a href="" className="re_id">
              4.21ee
            </a>
            <span className="re_p"> 큰일났다 벌써졸림 </span>
          </p>
        </div>
        <div className="comments">
          <div className="commentFeed" id="other_re">
            <ul className="feedComment">
              <ul id="addR">
                <li>
                  <a className="re_id" href="#">
                    {comment.name}
                  </a>
                  <span className="re_p">ㄴㅇㄹㅇㄴㄹ</span>
                  <span className="delete">x</span>
                  <span className="likeH">
                    <i
                      id={this.state.isLike ? 'like' : 'dislike'}
                      className="far fa-heart"
                      onClick={this.canLike}
                    ></i>
                  </span>
                </li>
                ;{/* <AddRepl /> */}
                {/* <Repl /> */}
              </ul>
              {/* <ExComment /> */}
            </ul>
          </div>
        </div>
        <div className="howLong">
          <div>25분전</div>
        </div>
        <section className="write">
          <button>
            <i className="far fa-smile"></i>
          </button>
          <input
            id="writeComment"
            type="text"
            placeholder="댓글 달기..."
            onChange={this.addRepl}
            onKeyPress={this.enterBtn}
            value={this.state.repl}
          />
          <button id="writeBtn" onClick={this.clickBtn}>
            게시
          </button>
        </section>
      </>
    );
    // return (
    //   <NewComment
    //     key={comment.id}
    //     name={comment.userName}
    //     comment={comment.content}
    //   />
    // );
  }
}

export default DG;
