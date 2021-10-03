import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <ul className="footer">
        <li className="footer-text">
          <span>Instagram </span>
          <Link to="#">정보 ・ </Link>
          <Link to="#">지원 ・ </Link>
          <Link to="#">홍보 센터 ・ </Link>
          <Link to="#">API ・ </Link>
        </li>
        <li className="footer-text">
          <Link to="#">채용정보 ・ </Link>
          <Link to="#">개인정보처리방침 ・ </Link>
          <Link to="#">약관 ・ </Link>
        </li>
        <li className="footer-text">
          <Link to="#">디렉터리 ・ </Link>
          <Link to="#">프로필 ・ </Link>
          <Link to="#">해시태그 ・ </Link>
          <Link to="#">언어 ・ </Link>
        </li>
        <li className="footer-text-last">
          <span>© 2019 INSTAGRAM</span>
        </li>
      </ul>
    );
  }
}
export default Footer;
