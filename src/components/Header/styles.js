import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: var(--background-color-nav);

  z-index: 1000000;
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  column-gap: 1.3rem;

  @media only screen and (max-width: 991px) {
    position: absolute;
    background: var(--background-color);
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    padding-top: 80px;
  }
`;

export const NavItem = styled.li`
  a {
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--color-title);
    text-decoration: none;
    transition: 0.3s;

    :hover {
      color: var(--background-button);
    }
  }
`;

export const NavRightDiv = styled.div`
  p {
    font-weight: 500;
    color: var(--color-title);
    font-size: 1.1rem;

    i {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const NavMenuDiv = styled.div`
  @media only screen and (max-width: 991px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-title);
    z-index: 99;
    display: none;
  }
`;

export const MenuMobileDiv = styled.div`
  display: none;

  span {
    i {
      font-size: 1.4rem;
      color: var(--color-title);
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 991px) {
    display: block;
  }
`;

export const ActiveMenuDiv = styled.div`
  @media only screen and (max-width: 991px) {
    display: block;
  }
`;
