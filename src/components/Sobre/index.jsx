import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import sobreImg from "../../assets/images/about-us.jpg";

import { ImgDiv, ConteudoDiv, ContadorTitle, ContadorSpan } from "./styles";

const SobreNos = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <ImgDiv>
              <figure>
                <img src={sobreImg} alt="Sobre" className="w-100" />
              </figure>
            </ImgDiv>
          </Col>
          <Col lg="6" md="6">
            <ConteudoDiv>
              <h2>Sobre</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                laborum illum nulla odio expedita sapiente amet. Praesentium
                libero excepturi animi, id eveniet blanditiis harum voluptatum,
                quae non inventore laboriosam ut!
              </p>
              <div className="about__counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <ContadorSpan>
                      <CountUp start={0} end={5} duration={2} suffix="Mil" />
                    </ContadorSpan>
                    <ContadorTitle>Projetos completos</ContadorTitle>
                  </div>
                  <div className="single__counter">
                    <ContadorSpan>
                      <CountUp start={0} end={12} duration={2} suffix="Mil" />
                    </ContadorSpan>
                    <ContadorTitle>Alunos ao redor do mundo</ContadorTitle>
                  </div>
                </div>
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <ContadorSpan>
                      <CountUp
                        start={0}
                        end={5}
                        duration={2}
                        suffix="Milhões"
                      />
                    </ContadorSpan>
                    <ContadorTitle>Fundos arrecadados</ContadorTitle>
                  </div>
                  <div className="single__counter">
                    <ContadorSpan>
                      <CountUp start={0} end={2} duration={2} suffix="Mil" />
                    </ContadorSpan>
                    <ContadorTitle>Notícias veiculadas</ContadorTitle>
                  </div>
                </div>
              </div>
            </ConteudoDiv>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SobreNos;
