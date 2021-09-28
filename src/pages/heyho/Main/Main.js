import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';
import Input from './Input';
import Comment from './Comment';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      newReply: '',
      replies: [],
    };
  }

  textChange = e => {
    this.setState({
      newReply: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newReply.length === 0) return;
    this.setState({
      replies: this.state.replies.concat({
        userName: 'yo.heyho',
        content: this.state.newReply,
      }),
      newReply: '',
    });
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
    return (
      <>
        <Nav />

        <main>
          <div id="feeds">
            <div className="feedTop">
              <img
                alt="userImage"
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
                {this.state.replies.map(el => {
                  return (
                    <Comment userName={el.userName} content={el.content} />
                  );
                })}
              </ul>
              <Input
                handleSubmit={this.handleSubmit}
                newReply={this.state.newReply}
                textChange={this.textChange}
              />
            </section>
          </div>

          <div id="main-right">
            <div>
              <img
                alt="wecodeLogo"
                className="wecodeImage"
                src="/images/heyho/wecode.jpeg"
              />
              <p>
                <span className="strong">
                  wecode_bootcamp
                  <br />
                </span>
                <span className="fontGrey">WeCode | 위코드</span>
              </p>
            </div>

            <div className="story">
              <div className="instory1">
                <div className="fontGrey">스토리</div>
                <div>모두 보기</div>
              </div>

              <div className="instory2">
                <div>
                  <img
                    alt="userImage"
                    className="heyhoPic"
                    src="/images/heyho/gotns.png"
                  />

                  <div className="flexBox">
                    <div>hyukysiv</div>
                    <div className="fontGrey">20시간 전</div>
                  </div>
                </div>

                <div>
                  <img
                    alt="userImage"
                    className="heyhoPic"
                    src="/images/heyho/gotns.png"
                  />

                  <div className="flexBox">
                    <div>hyukysiv</div>
                    <div className="fontGrey">20시간 전</div>
                  </div>
                </div>

                <div>
                  <img
                    alt="userImage"
                    className="heyhoPic"
                    src="/images/heyho/gotns.png"
                  />

                  <div className="flexBox">
                    <div>hyukysiv</div>
                    <div className="fontGrey">20시간 전</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="suggest">
              <div className="inSuggest1">
                <div className="fontGrey">회원님을 위한 추천</div>
                <div>모두 보기</div>
              </div>
              <div className="inSuggest2">
                <div>
                  <img
                    alt="heyho"
                    className="heyhoPic"
                    src="/images/heyho/gotns.png"
                  />
                  <div className="flexBox">
                    <div>hyukysiv</div>
                    <div className="fontGrey">20시간 전</div>
                  </div>
                </div>
                <div>
                  <img
                    alt="gotns"
                    className="heyhoPic"
                    src="/images/heyho/gotns.png"
                  />
                  <div className="flexBox">
                    <div>hyukysiv</div>
                    <div className="fontGrey">20시간 전</div>
                  </div>
                </div>
                <div>
                  <img
                    alt="gotns"
                    className="heyhoPic"
                    src="/images/heyho/gotns.png"
                  />
                  <div className="flexBox">
                    <div>hyukysiv</div>
                    <div className="fontGrey">20시간 전</div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="fontGrey">
              Instagram 정보.지원, 홍보 센터, API, 채용 정보, 개인정보처리방침,
              약관, 디렉터리, 프로필, 해시태그, 언어
            </footer>
          </div>
        </main>
      </>
    );
  }
}

export default withRouter(Main);
