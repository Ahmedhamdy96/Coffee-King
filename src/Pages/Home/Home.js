import React from "react";
import homeLogo from "./../../imgs/home-2-logo-1.png";
import seprator from "./../../imgs/coffee_cut_long.png";

import style from "./Home.module.css";

const Home = () => {
  return (
    <section className={style.sectionHome}>
      <div className="container">
        <img src={homeLogo} className={style.homeLogo} alt="home logo" />
      </div>

      <img src={seprator} className={style.seprator} alt="seprator image" />
    </section>
  );
};

export default Home;
