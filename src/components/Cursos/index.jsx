import React from "react";
import { Container, Row, Col } from "reactstrap";
import CursosCard from "../CursosCard";
import "./styles.css";

import cursoImage1 from "../../assets/images/web-design.jpg";
import cursoImage2 from "../../assets/images/graphic-design.jpg";
import cursoImage3 from "../../assets/images/ui-ux.jpg";
import cursoImage4 from "../../assets/images/javascript-programing.jpg";
import cursoImage5 from "../../assets/images/cloud-storage.jpg";
import cursoImage6 from "../../assets/images/layout-web.jpg";

const cursosDB = [
  {
    id: "01",
    titulo: "Web Design BootCamp 2022 Avançado",
    licao: 12,
    estudantes: 16,
    avaliacao: 7,
    imgUrl: cursoImage1,
  },

  {
    id: "02",
    titulo: "Design gráfico profissional",
    licao: 18,
    estudantes: 12,
    avaliacao: 9,
    imgUrl: cursoImage2,
  },

  {
    id: "03",
    titulo: "UI/UX  BootCamp para Iniciantes",
    licao: 20,
    estudantes: 14,
    avaliacao: 8,
    imgUrl: cursoImage3,
  },
  {
    id: "04",
    titulo: "JavaScript do Zero ao Avançado",
    licao: 50,
    estudantes: 16,
    avaliacao: 7,
    imgUrl: cursoImage4,
  },

  {
    id: "05",
    titulo: "DevOps, Azure e AWS Avançado",
    licao: 28,
    estudantes: 12,
    avaliacao: 9,
    imgUrl: cursoImage5,
  },

  {
    id: "06",
    titulo: "Bootstrap do Zero ao Avançado",
    licao: 30,
    estudantes: 14,
    avaliacao: 8,
    imgUrl: cursoImage6,
  },
];

const Cursos = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="cursos__populares d-flex justify-content-between align-items-center">
              <div className="cursos__populares-left w-50">
                <h2>Cursos Populares</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>
              <div className="w-50 text-end">
                <button className="btn">Ver todos</button>
              </div>
            </div>
          </Col>
          {cursosDB.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CursosCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Cursos;
