import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";

const slideImg = [
  {
    id: 1,
    src: "/assets/s1.png",
    desc: "HealthCare",
  },
  {
    id: 2,
    src: "/assets/s2.png",
    desc: "Education",
  },
  {
    id: 3,
    src: "/assets/s3.png",
    desc: "Automotive",
  },
  {
    id: 4,
    src: "/assets/s1.png",
    desc: "HealthCare",
  },
  {
    id: 5,
    src: "/assets/s2.png",
    desc: "Education",
  },
  {
    id: 6,
    src: "/assets/s3.png",
    desc: "Automotive",
  },
];

export default function Sliderr() {
  return (
    <div className="sliderMain">
      <div className="sliderUpper">
        <b className="sliderBold">Trusted by </b>
        <span className="sliderGreen">Leading Industries</span>
        <br />
        <div className="sliderRegular">
          Have a look at our successful game projects where our teams have
          exhibited their <br /> development brilliance.
        </div>
        <span className="sliderButton">See All Industries</span>
      </div>

      <div className="sliderLower">
        <Swiper
          modules={[Mousewheel]}
          slidesPerView={3.3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          mousewheel={{ forceToAxis: true }}
          touchRatio={1.5}
          simulateTouch={true}
          className="swiperContainer"
        >
          {slideImg.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slideContent">
                <img src={slide.src} alt={slide.desc} className="slideImage" />
                <div className="slideDesc">{slide.desc}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
