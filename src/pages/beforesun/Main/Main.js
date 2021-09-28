import React from 'react';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import Side from './Side/Side';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/FeedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          feedList: result,
        });
      });
  }
  render() {
    return (
      <div className="main-box">
        <Nav />
        <main className="main-container">
          <div>
            {this.state.feedList.map(content => {
              return (
                <Feeds
                  // content={content}
                  subAlt={content.subAlt}
                  subSrc={content.subSrc}
                  feedUserId={content.feedUserId}
                  location={content.location}
                  mainAlt={content.mainAlt}
                  mainSrc={content.mainSrc}
                  heartAlt={content.heartAlt}
                  heartSrc={content.heartSrc}
                  heartName={content.heartName}
                  heartNum={content.heartNum}
                  feedText={content.feedText}
                  time={content.time}
                  key={content.id}
                />
              );
            })}
          </div>
          <Side />
        </main>
      </div>
    );
  }
}
export default withRouter(Main);
