import React from "react";
import seprator from "./../../imgs/coffee_cut_long.png";
import style from "./Home.module.css";

const Home = () => {
  return (
    <section className={style.sectionHome}>
      <div className="container"> Home </div>

      <img src={seprator} className={style.seprator} alt="seprator image" />
    </section>
  );
};

export default Home;
