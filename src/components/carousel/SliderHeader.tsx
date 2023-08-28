import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "./imagesSliderHeader";
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
        {images.map((img) => (
          <CardSliderHeader
            key={img.id}
            urlImg={img.urlImage}
            title={img.title}
            subtitle={img.subtitle}
          ></CardSliderHeader>
        ))}
      </Slider>
    </header>
  );
};
