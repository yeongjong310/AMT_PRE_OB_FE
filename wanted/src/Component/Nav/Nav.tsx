import React, { ReactElement } from 'react';
import {
  StyledNavMain,
  StyledNavMenu,
  StyledNavAside,
  StyledNav,
  Presentation,
} from './Nav.styled';
import { ReactComponent as Finder } from './assets/finder.svg';
import { ReactComponent as More } from './assets/more.svg';
import menus from '../../data/menus';

export default function Nav(): ReactElement {
  return (
    <Presentation role="presentation">
      <StyledNav>
        <StyledNavMain>
          <div className="menu_btn-logo">
            <button type="button">
              <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" />
            </button>
            <a href="/" aria-label="home link">
              <h1>wanted</h1>
            </a>
          </div>
          <button className="sign-up tablet" type="button">
            회원가입하기
          </button>
        </StyledNavMain>
        <StyledNavMenu>
          {menus.map(({ id, title, href, view, strong: Strong }) => (
            <li className={view + (title === '홈' ? ' active' : '')} key={id}>
              <a href={href}>
                {title}
                {Strong && (
                  <em>
                    <Strong />
                  </em>
                )}
              </a>
            </li>
          ))}
        </StyledNavMenu>
        <StyledNavAside>
          <ul>
            <li>
              <button className="search_btn" type="button">
                <Finder />
              </button>
            </li>
            <li className="desktop">
              <button className="sign-up_btn" type="button">
                회원가입/로그인
              </button>
            </li>
            <li className="divider desktop">
              <a className="enterprise-service_btn" href="##">
                기업 서비스
              </a>
            </li>
            <li className="mobile-tablet">
              <button type="button">
                <More />
              </button>
            </li>
          </ul>
        </StyledNavAside>
      </StyledNav>
    </Presentation>
  );
}
