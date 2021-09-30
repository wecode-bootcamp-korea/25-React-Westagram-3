import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';
import Feed from './Feed';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      newReply: '',
      replies: [],
      feedList: [],
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
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });

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
          <div className="feedFlex">
            {this.state.feedList.map(feedData => {
              return (
                <Feed
                  feedData={feedData}
                  replies={this.state.replies}
                  id={this.state.id}
                />
              );
            })}
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
