import { useRef } from "react";
import { Container } from "reactstrap";
import "./styles.css";
import {
  HeaderContainer,
  NavList,
  NavItem,
  NavRightDiv,
  MenuMobileDiv,
  NavMenuDiv,
} from "./styles";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "Sobre",
    url: "#",
  },
  {
    display: "Cursos",
    url: "#",
  },
  {
    display: "Projetos",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
  {
    display: "Contato",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };
  return (
    <HeaderContainer>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-book-2-line"></i> Instituto
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <NavMenuDiv ref={menuRef} onClick={menuToggle}>
              <NavList>
                {navLinks.map((item, index) => (
                  <NavItem key={index}>
                    <a href={item.url}>{item.display}</a>
                  </NavItem>
                ))}
              </NavList>
            </NavMenuDiv>
            {/* <div className="nav__menu" ref={menuRef} onClick={menuToggle}></div> */}

            <NavRightDiv>
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +55 4799999-8888
              </p>
            </NavRightDiv>
          </div>
          <MenuMobileDiv>
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </MenuMobileDiv>
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
