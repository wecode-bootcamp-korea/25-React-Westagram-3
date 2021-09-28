import React from 'react';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import '../../../components/Nav/Nav.scss';
import Story from '../componentsSS/story';
import Feed from '../componentsSS/feed';
import Suggest from '../componentsSS/suggest';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
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
    const feedList = this.state.feeds.map(data => {
      return (
        <Feed
          id={data.id}
          writer={data.writer}
          img={data.img}
          text={data.text}
        />
      );
    });
    return (
      <>
        <Nav />
        <div className="Main">
          <main className="feed">{feedList}</main>
          <aside>
            <section className="account">
              <img
                alt="user"
                src="https://ca.slack-edge.com/TH0U6FBTN-U02808S0GCF-31acdd48834c-512"
              />
              <div className="textLine">
                <div className="name">Acidity</div>
                <div className="explain">Hello, I'm Acid</div>
              </div>
            </section>
            <section className="asideBox">
              <div className="storyHeader">
                <h3>Story</h3>
                <span className="seeAll">See All</span>
              </div>
              <div className="storyList">
                <Story storyUsers={storyUsers} />
              </div>
            </section>
            <section className="asideBox">
              <div className="followHeader">
                <h3>Suggested for You</h3>
                <span className="seeAll">See All</span>
              </div>
              <div className="followList">
                <Suggest suggestList={suggestList} />
              </div>
            </section>
          </aside>
        </div>
      </>
    );
  }
}

class user {
  constructor(nickname, introduce, img) {
    this.nickname = nickname;
    this.introduce = introduce;
    this.img = img;
  }
}
const acid = new user(
  'acid',
  'FrontEndDev',
  'https://ca.slack-edge.com/TH0U6FBTN-U02808S0GCF-31acdd48834c-512'
);
const fairy_yoon = new user(
  'fairy_yoon',
  'FrontEndDev',
  'https://ca.slack-edge.com/TH0U6FBTN-U0288815M5L-83cffa237ed7-512'
);
const mj_bro = new user(
  'mj_bro',
  'FrontEndDev',
  'https://ca.slack-edge.com/TH0U6FBTN-U028F6M33TM-0b35e2ac4357-512'
);
const before_sun = new user(
  'before_sun',
  'FrontEndDev',
  'https://ca.slack-edge.com/TH0U6FBTN-U028TKWDUGZ-127382dc96e8-512'
);
const zzoozzoo_boy = new user(
  'zzoozzoo_boy',
  'FrontEndDev',
  'https://ca.slack-edge.com/TH0U6FBTN-U028F6LHV2P-2b70ab7b7419-512'
);
const sergeant_yang = new user(
  'sergeant_yang',
  'BackEndDev',
  'https://ca.slack-edge.com/TH0U6FBTN-U028F0LER42-390940eb15a3-512'
);

const storyUsers = [fairy_yoon, mj_bro, before_sun, zzoozzoo_boy];
const suggestList = [sergeant_yang];

export default withRouter(Main);
