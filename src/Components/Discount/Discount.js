import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Discount.module.css";
import bg from "./../../imgs/coffe_back.png";
import Btn from "./../UI/Btn/Btn";
import card from "./../../imgs/card.png";

const Discount = () => {
  return (
    <Fragment>
      <Container
        style={{
          backgroundColor: "#f6f6f6",
          marginBottom: "100px",
          padding: "0",
          overflow: "hidden",
          borderRadius: "5px",
        }}
      >
        <Row>
          <Col className={style.left} sm={12} md={6}>
            <h3> Special offer </h3>

            <h2>Get your discount</h2>

            <img src={card} alt="Discount card " />

            <p>
              Morbi malesuada dui in iaculis lacinia. Duis laoreet ut liberonec
              tincidunt. Maecenas a eros finibus, condimentum tortoreget, auctor
              nunc. Aenean a efficitur leo.
            </p>
            <Btn className={style.getBtn}> Get now</Btn>
          </Col>
          <Col
            className={style.imgContainer}
            style={{ overflow: "hidden" }}
            sm={12}
            md={6}
          >
            <img src={bg} alt="discount background" style={{ Width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Discount;
