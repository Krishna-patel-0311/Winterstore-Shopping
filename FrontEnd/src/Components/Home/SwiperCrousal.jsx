import React, { useState, useEffect } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { toast } from "react-toastify";
import axios from "axios";
import WebItem from "./WebItem";

const SwiperCrousal = (props) => {
  const [items, setitems] = useState([]);
  useEffect(() => {
    getFeaturedProducts(props.Idealfor);
  }, [props.Idealfor]);
  const getFeaturedProducts = async (idealFor) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/product/featured/${idealFor}`
      );
      if (response.status === 200) {
        setitems(response.data);
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
  };

  const Slides = items.map((item, i) => {
    return (
      <SwiperSlide>
        <WebItem
          key={i}
          ItemId={item._id}
          title={item.pname}
          Image={item.pimage}
          Mrp={item.pmrp}
          Price={item.pprice}
        />
      </SwiperSlide>
    );
  });
  return (
    <div class="container-fluid py-3">
      <div class="row m-2">
        <div className="col col-md-10 sm-6 xs-6">
          <h2 className="  px-3 w-100 text-center">
            {props.title ? props.title : ""}
          </h2>
        </div>
      </div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1260: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {Slides}
      </Swiper>
    </div>
  );
};

export default SwiperCrousal;
