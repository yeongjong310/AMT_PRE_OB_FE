import styled from 'styled-components/macro';

export const Presentation = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);

  @media (max-width: 991px) {
    height: 110px;
  }

  .desktop {
    @media (max-width: 991px) {
      display: none !important;
    }
  }

  .tablet {
    @media (min-width: 992px) {
      display: none !important;
    }
  }

  .mobile {
    @media (min-width: 767px) {
      display: none !important;
    }
  }

  .desktop-tablet {
    @media (max-width: 766px) {
      display: none !important;
    }
  }

  .mobile-tablet {
    @media (min-width: 992px) {
      display: none !important;
    }
  }
`;

export const StyledNav = styled.nav`
  width: 87.72%;
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.125rem;
  background-color: #fff;

  @media (max-width: 1199px) {
    width: 90%;
  }
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

export const StyledNavMain = styled.div`
  .sign-up {
    color: #36f;
    font-size: 14px;
    line-height: 32px;
    height: 34px;
    border: 1px solid #36f;
    border-radius: 17px;
    padding: 0 14px;
  }
  .menu_btn-logo {
    display: flex;
    > button {
      margin-top: 3px;
      margin-right: 15px;
      > img {
        width: 17px;
        height: 14px;
      }
    }
    a {
      text-decoration: none;
    }
  }

  @media (max-width: 991px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    box-sizing: border-box;
    width: 100%;
    padding: 15px 0;
  }
  @media (max-width: 767px) {
    padding: 15px 20px;
  }
`;

export const StyledNavMenu = styled.ul`
  justify-content: ;
  > li {
    display: inline-block;
    > a {
      position: relative;
      vertical-align: middle;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      padding: 15px;
      display: inline-block;
      @media (max-width: 991px) {
        padding: 11px 10px 19px;
      }
      > em {
        position: absolute;
        top: 5px;
        right: -7px;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
  }
  @media (max-width: 767px) {
    > li.active {
      box-shadow: inset 0 -2px #258bf7;
    }
    margin-left: 10px;
  }
`;

export const StyledNavAside = styled.aside`
  ul {
    > li {
      vertical-align: middle;
      display: inline-block;
      > * {
        padding: 0 10px;
        height: 100%;e 
        font-size: 14px;
        font-weight: 600;
        line-height: 1;

        @media (max-width: 1199px) {
          padding: 0 5px;
        }
      }
    }
    > li.divider {
      display: inline-flex;
      margin-left: 6px;

      &:before {
        display: block;
        content: '';
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        margin: auto 10px;
      }

      @media (max-width: 1199px) {
        margin-left: 0;
      }
    }

    .search_btn {
      margin-top: 5px;
    }

    .enterprise-service_btn {
      font-size: 13px;
      color: #666;
      line-height: 30px;
      height: 30px;
      border: 1px solid #e1e2e3;
      border-radius: 15px;
      padding: 0 10px;
      margin-left: 15px;
      font-weight: 400;
      display: inline-block;
      vertical-align: bottom;

      @media (max-width: 1199px) {
        margin: 0;
      }
    }
  }
  @media (max-width: 767px) {
    margin-right: 10px;
  }
`;
