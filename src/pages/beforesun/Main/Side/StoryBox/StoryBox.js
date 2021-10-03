import React from 'react';
import { Link } from 'react-router-dom';
import './StoryBox.scss';

class StoryBox extends React.Component {
  render() {
    return (
      <>
        <li className="side-story">
          <Link to="#">
            <img alt="user-poto" src={this.props.src} />
          </Link>
          <div className="story-name">
            <Link to="#">{this.props.name}</Link>
            <span>{this.props.time}</span>
          </div>
        </li>
      </>
    );
  }
}
export default StoryBox;
