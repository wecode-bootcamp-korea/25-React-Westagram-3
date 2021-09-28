import React from 'react';
import Feeds from './Feeds';

class Feed extends React.Component {
  render() {
    return this.props.feedList.map(feed => {
      return (
        <Feeds
          key={feed.id}
          name={feed.userName}
          content={feed.content}
          likeNum={feed.likeNumber}
          isliked={feed.isliked}
        />
      );
    });
  }
}

export default Feed;
