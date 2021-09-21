import React from 'react';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import Side from './Side/Side';
class Main extends React.Component {
  render() {
    return (
      <div className="main-box">
        <Nav />
        <main className="main-container">
          <Feeds />
          <Side />
        </main>
      </div>
    );
  }
}
export default withRouter(Main);
