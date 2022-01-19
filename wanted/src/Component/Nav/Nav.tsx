import React, { ReactElement } from 'react';
import { ReactComponent as Finder } from './assets/finder.svg';

export default function Nav(): ReactElement {
  const menus = [
    {
      id: 1,
      title: '홈',
      href: '#',
    },
    {
      id: 2,
      title: '이벤트',
      href: '#',
    },
    {
      id: 3,
      title: '직군별 연봉',
      href: '#',
    },
    {
      id: 4,
      title: '이력서',
      href: '#',
    },
    {
      id: 5,
      title: '커뮤니티',
      href: '#',
    },
    {
      id: 6,
      title: '프리랜서',
      href: '#',
    },
  ];
  return (
    <nav>
      <div>
        <div>
          <button type="button">
            <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" />
          </button>
          <a href="/" aria-label="home link">
            <h1>wanted</h1>
          </a>
        </div>
        <button type="button">회원가입하기</button>
      </div>
      <ul>
        {menus.map(({ id, title, href }) => (
          <li key={id}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
      <aside>
        <ul>
          <li>
            <button type="button">
              <Finder />
            </button>
          </li>
          <li>
            <button type="button">회원가입/로그인</button>
          </li>
          <li>
            <a href="##">기업 서비스</a>
          </li>
        </ul>
      </aside>
    </nav>
  );
}
