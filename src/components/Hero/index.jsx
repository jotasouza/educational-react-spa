import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/img-hero.png";
import { HeroContentDiv, SearchDiv } from "./styles";

const Hero = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <HeroContentDiv>
              <h1 className="mb-4 hero__title">A qualquer hora.</h1>
              <h2 className="mb-4 hero__title">Em qualquer lugar.</h2>
              <h2 className="mb-4 hero__title">Aprenda no seu ritmo!</h2>
              <p className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur impedit cum soluta ducimus mollitia perspiciatis
                nobis illum ea a velit, eius, eveniet sit, consectetur eaque
                expedita? Ratione porro maxime asperiores!
              </p>
            </HeroContentDiv>

            <SearchDiv>
              <input type="text" placeholder="Pesquisar" />
              <button className="btn">Pesquisar</button>
            </SearchDiv>
          </Col>
          <Col lg="6" md="6">
            <figure>
              <img src={heroImg} alt="Estudantes" className="w-100" />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
