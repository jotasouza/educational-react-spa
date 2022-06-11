import { Fragment } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SobreNos from "../components/Sobre";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <SobreNos />
    </Fragment>
  );
};

export default Home;
