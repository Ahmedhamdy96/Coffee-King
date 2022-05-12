import React, { useRef } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import style from "./RecentProducts.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";

import img1 from "./../../imgs/coffee_item1-300x300.jpg";
import img2 from "./../../imgs/coffee_item2-300x300.jpg";
import img3 from "./../../imgs/coffee_item3-300x300.jpg";
import img4 from "./../../imgs/coffee_item4-300x300.jpg";
import { Container } from "react-bootstrap";
import "swiper/css/navigation";
// import required modules
import { Navigation, SwiperCore } from "swiper";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Btn from "../UI/Btn/Btn";

const RecentProducts = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "American Black Coffee",
      desc: "product description text ",
      price: "26.99",
      img: img1,
    },
    {
      id: 2,
      name: "Ground Coffee",
      desc: "product description text ",
      price: "45.30",
      img: img2,
    },
    {
      id: 3,
      name: "Coffee Beans",
      desc: "product description text ",
      price: "90.99",
      img: img3,
    },
    {
      id: 4,
      name: "Accessories",
      desc: "product description text ",
      price: "265.29",
      img: img4,
    },

    {
      id: 5,
      name: "American Black Coffee",
      desc: "product description text ",
      price: "26.99",
      img: img1,
    },
    {
      id: 6,
      name: "Ground Coffee",
      desc: "product description text ",
      price: "45.30",
      img: img2,
    },
    {
      id: 7,
      name: "Coffee Beans",
      desc: "product description text ",
      price: "90.99",
      img: img3,
    },
    {
      id: 8,
      name: "Accessories",
      desc: "product description text ",
      price: "265.29",
      img: img4,
    },
  ];

  return (
    <div style={{ backgroundColor: "#242424", padding: "100px 0" }}>
      <SectionHeader
        backTitle={"Products"}
        frontUp={"choose your coffee"}
        frontDown={"Recent Products"}
      />

      {/* <Container> */}
      <div className={style.sliderContainer}>
        <Swiper
          ref={swiperRef}
          spaceBetween={100}
          slidesPerView={4}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <ProductCard
                  img={product.img}
                  name={product.name}
                  desc={product.desc}
                  price={product.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          ref={prevRef}
          className={style.prev}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaChevronLeft />
        </div>
        <div
          ref={nextRef}
          className={style.next}
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaChevronRight />
        </div>
      </div>
      <Btn className={style.viewAllBtn}> View all products</Btn>
      {/* </Container> */}
    </div>
  );
};

export default RecentProducts;
