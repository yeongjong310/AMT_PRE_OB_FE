import { ReactComponent as Beta } from './assets/beta.svg';
import { ReactComponent as New } from './assets/new.svg';

const menus = [
  {
    id: 0,
    title: '홈',
    href: '#',
    view: 'mobile',
  },
  {
    id: 1,
    title: '채용',
    href: '#',
    view: 'all',
  },
  {
    id: 2,
    title: '이벤트',
    href: '#',
    view: 'all',
  },
  {
    id: 3,
    title: '직군별 연봉',
    href: '#',
    view: 'desktop-tablet',
  },
  {
    id: 4,
    title: '이력서',
    href: '#',
    view: 'desktop-tablet',
  },
  {
    id: 5,
    title: '커뮤니티',
    href: '#',
    view: 'desktop-tablet',
    strong: New,
  },
  {
    id: 6,
    title: '프리랜서',
    href: '#',
    view: 'desktop-tablet',
  },
  {
    id: 7,
    title: 'AI 합격예측',
    href: '#',
    view: 'desktop-tablet',
    strong: Beta,
  },
];

export default menus;
