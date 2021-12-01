import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { v4 as uuidv4 } from "uuid";
SwiperCore.use([Pagination]);

export default function AboutUsSlider() {
  const list = [
    "Dec 2020",
    "Dec 2019",
    "Dec 2019",
    "Dec 2019",
    "Dec 2019",
    "Dec 2019",
    "Dec 2019",
    "Dec 2021",
  ];

  return (
    <Swiper
      id="man-get"
      slidesPerView={"auto"}
      spaceBetween={0}
      freeMode={true}
      grabCursor={"true"}
    >
      {list.map((date) => (
        <SwiperSlide id="the-boss" key={uuidv4()}>
          <div className="date-parent">
            <div className="date-text">
              <h3>{date}</h3>
            </div>
          </div>
          <div className="achives-parent">
            <div className="achives-text">
              <h3>Hello world</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
