import SwiperCore, { FreeMode } from "swiper/core"; // Import SwiperCore and FreeMode from "swiper/core"
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import OfferCard from "./OfferCard";

// Initialize SwiperCore with the FreeMode module
SwiperCore.use([FreeMode]);

const OfferSlider = () => {
  return (
    <section className="container lg:mt-20">
      <div>
        <h2 className="text-[36px] text-[#101828] text-center font-bold mb-5 lg:mb-10">
          Exciting and Friendly tours we offer
        </h2>

        <Swiper
          freeMode={true}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          }}
        >
          <SwiperSlide>
            <OfferCard />
          </SwiperSlide>
          <SwiperSlide>
            <OfferCard />
          </SwiperSlide>
          <SwiperSlide>
            <OfferCard />
          </SwiperSlide>
          <SwiperSlide>
            <OfferCard />
          </SwiperSlide>
          <SwiperSlide>
            <OfferCard />
          </SwiperSlide>
        </Swiper>

        {/* //TODO:slider navigate button is give  */}
        {/* <SwiperNavButtons /> */}
      </div>
    </section>
  );
};

export default OfferSlider;
