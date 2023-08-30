import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./imagesSliderHeader";
import { CardSliderHeader } from "./CardSliderHeader";
export const SliderHeader = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <header className="h-[330px] w-full overflow-x-hidden sm:h-[400px] md:h-[480px] lg:h-[550px] mb-12">
      <Slider {...settings}>
        {data.map((dat) => (
          <CardSliderHeader
            key={dat.id}
            urlImg={dat.urlImage}
            title={dat.title}
            subtitle={dat.subtitle}
          ></CardSliderHeader>
        ))}
      </Slider>
    </header>
  );
};
