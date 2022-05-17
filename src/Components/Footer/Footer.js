import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Footer.module.css";
import { FaArrowUp } from "react-icons/fa";
import logo from "./../../imgs/logo_white-7.png";

import Btn from "./../../Components/UI/Btn/Btn";

import { IoIosArrowForward } from "react-icons/io";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={`container ${style.content}`}>
        <div>
          <img src={logo} alt="logo" />
          <p>
            Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
            eleifend rhoncus. Mauris vel nisl a massa viverra sollicitudin
            semper a diam.
          </p>
          <Btn> Hire me </Btn>
        </div>
        <div>
          <h3>EXPLORE</h3>
          <div className={style.links}>
            <p>
              <IoIosArrowForward style={{ color: "#c0aa83" }} /> Home
            </p>
            <p>
              <IoIosArrowForward style={{ color: "#c0aa83" }} /> Blog
            </p>
            <p>
              <IoIosArrowForward style={{ color: "#c0aa83" }} /> Contact Us
            </p>
            <p>
              <IoIosArrowForward style={{ color: "#c0aa83" }} /> About Us
            </p>
            <p>
              <IoIosArrowForward style={{ color: "#c0aa83" }} /> Products
            </p>
            <p>
              <IoIosArrowForward style={{ color: "#c0aa83" }} /> Gallery
            </p>
          </div>
        </div>
        <div>
          <h3> CONTACT US</h3>

          <div className={style.contacts}>
            <p>
              <IoLocationSharp className={style.icon} /> Mansoura city , Egypt
            </p>
            <p>
              <FaPhoneAlt className={style.icon} /> +201020304050
            </p>
            <p>
              <FaEnvelope className={style.icon} /> info@contact.com
            </p>
            <p>
              <FaSkype className={style.icon} /> skype account
            </p>
          </div>
        </div>
      </div>

      <div className={style.cpy}>
        <div className="container">
          <p> all rights reserved &copy; </p>
          <span>
            <FaArrowUp />
            <p> Top </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
