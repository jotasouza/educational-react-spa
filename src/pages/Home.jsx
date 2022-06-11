import { Fragment } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Cursos from "../components/Cursos";
import SobreNos from "../components/Sobre";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Cursos />
      <SobreNos />
      <Footer />
    </Fragment>
  );
};

export default Home;
