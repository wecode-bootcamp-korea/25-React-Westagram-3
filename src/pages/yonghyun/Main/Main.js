import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Comments/Feed';
import Right from './Feed/Right';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }
  componentDidMount() {
    fetch('./data/totalData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const feedL = this.state.feedList.map(a => {
      const { id, userName, content, likeNumber, isLiked, when, comment } = a;
      return (
        <Feed
          id={id}
          userName={userName}
          content={content}
          likeNumber={likeNumber}
          isLiked={isLiked}
          when={when}
          comment={comment}
        />
      );
    });
    return (
      <>
        <Nav />
        <main>
          <div className="main">
            <div className="feeds">
              <div>
                <article className="firstFeed">{feedL}</article>
              </div>
            </div>
            <Right />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
