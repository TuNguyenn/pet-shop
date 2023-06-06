import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

const services = [
  {
    image: "/img/services/service-icon1.svg",
    name: "Pharmacy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    btnText: "Explore",
  },
  {
    image: "/img/services/service-icon2.svg",
    name: "Breed-specific Haircuts",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    btnText: "Explore",
  },
  {
    image: "/img/services/service-icon3.svg",
    name: "Cloths",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    btnText: "Explore",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="serviceSlider min-h-[680px]"
    >
      {services.map((service, index) => {
        return (
          <>
            <SwiperSlide
              className="border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8 "
              key={index}
            >
              <Image
                src={service.image}
                width={100}
                height={100}
                className="mb-9 "
              />
              <div className="text-[26px] font-medium mb-4">{service.name}</div>
              <div className="text-[20px] mb-8 ">{service.description}</div>
              <button className="btn btn-primary">{service.btnText}</button>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
