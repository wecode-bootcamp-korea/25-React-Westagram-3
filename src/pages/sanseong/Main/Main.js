import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Story from '../componentsSS/story';
import Feed from '../componentsSS/feed';
import Suggest from '../componentsSS/suggest';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('http:/data/feedData.json', {
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
    const { feeds } = this.state;
    return (
      <>
        <Nav />
        <div className="Main">
          <main className="feed">
            {feeds.map(data => {
              const { id, writer, img, text, comment } = data;
              return (
                <Feed
                  key={id}
                  writer={writer}
                  img={img}
                  text={text}
                  comment={comment}
                />
              );
            })}
          </main>
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
                <Story />
              </div>
            </section>
            <section className="asideBox">
              <div className="followHeader">
                <h3>Suggested for You</h3>
                <span className="seeAll">See All</span>
              </div>
              <div className="followList">
                <Suggest />
              </div>
            </section>
          </aside>
        </div>
      </>
    );
  }
}

export default withRouter(Main);
