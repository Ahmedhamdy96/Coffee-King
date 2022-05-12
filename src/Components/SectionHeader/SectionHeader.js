import React from "react";
import style from "./SectionHeader.module.css";

const SectionHeader = ({ backTitle, frontUp, frontDown }) => {
  return (
    <div className={style.sectionHeader}>
      <p className={style.backTitle}> {backTitle} </p>
      <p className={style.frontUp}> {frontUp} </p>
      <h2 className={style.frontDown}> {frontDown} </h2>
    </div>
  );
};

export default SectionHeader;
