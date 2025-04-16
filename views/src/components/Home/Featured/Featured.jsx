import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureCard from "./FeatureCard.jsx";

const Featured = () => {
  const carsData = [
    {
      id: 0,
      img: "/src/assets/img/car1.png",
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 1,
      img: "/src/assets/img/car2.png",
      name: "BMW 3 Series",
      price: "54,890",
    },
    {
      id: 2,
      img: "/src/assets/img/car3.png",
      name: "Mercedes",
      price: "75,890",
    },
    {
      id: 3,
      img: "/src/assets/img/car4.png",
      name: "BMW 7 Series",
      price: "55,789",
    },
    {
      id: 4,
      img: "/src/assets/img/car5.png",
      name: "Mercedes-Benz",
      price: "95,776",
    },
    {
      id: 5,
      img: "/src/assets/img/car6.png",
      name: "Range Rover",
      price: "88,450",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className=" container mt-14">
      <h1 className=" font-bold text-4xl text-center">
        Featured <span className=" text-primary">Cars</span>
      </h1>

      <p className=" text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        laborum!
      </p>

      <div className=" mt-8">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeatureCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
