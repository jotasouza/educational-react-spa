import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FooterDiv, SeguirDiv } from "./styles";
import "./styles.css";

const footerLinks = [
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
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Política de privacidade",
    url: "#",
  },
  {
    display: "Área de membros",
    url: "#",
  },

  {
    display: "Guia de profissões",
    url: "#",
  },

  {
    display: "Termos de serviço",
    url: "#",
  },
];

const Footer = () => {
  return (
    <FooterDiv>
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className="d-flex align-items-center gap-1">
              <i class="ri-book-2-line"></i> Instituto
            </h2>
            <SeguirDiv>
              <p className="mb-0">Siga-nos nas redes sociais</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </SeguirDiv>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Links</h6>
            <ListGroup className="link__list">
              {footerLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Informações</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Contato</h6>

            <p>Endereço: Florianópolis, Santa Catarina</p>
            <p>Telefone: +55 4799999-8888 </p>
            <p>Email: instituto@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </FooterDiv>
  );
};

export default Footer;
