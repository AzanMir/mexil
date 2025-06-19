import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const cad = [
  {
    id: 1,
    pfp: "/assets/women.png",
    name: "Emily Chen",
    status: "/assets/verified.png",
    flag: "/assets/flag.png",
    city: "United State",
    star: "/assets/stars.png",
    desc: [
      <span>
        Mexil Software is a game changer! Their cutting-edge software <br />
        revolutionized Innovate Tech’s operations, propelling us forward.
        <br /> Their responsive team and solutions are instrumental to our
        success
      </span>,
    ],
  },
  {
    id: 2,
    pfp: "/assets/women.png",
    name: "Emily Chen",
    status: "/assets/verified.png",
    flag: "/assets/flag.png",
    city: "United State",
    star: "/assets/stars.png",
    desc: [
      <span>
        Mexil Software is a game changer! Their cutting-edge software <br />
        revolutionized Innovate Tech’s operations, propelling us forward.
        <br /> Their responsive team and solutions are instrumental to our
        success
      </span>,
    ],
  },
  {
    id: 3,
    pfp: "/assets/women.png",
    name: "Emily Chen",
    status: "/assets/verified.png",
    flag: "/assets/flag.png",
    city: "United State",
    star: "/assets/stars.png",
    desc: [
      <span>
        Mexil Software is a game changer! Their cutting-edge software <br />
        revolutionized Innovate Tech’s operations, propelling us forward.
        <br /> Their responsive team and solutions are instrumental to our
        success
      </span>,
    ],
  },
  {
    id: 4,
    pfp: "/assets/women.png",
    name: "Emily Chen",
    status: "/assets/verified.png",
    flag: "/assets/flag.png",
    city: "United State",
    star: "/assets/stars.png",
    desc: [
      <span>
        Mexil Software is a game changer! Their cutting-edge software <br />
        revolutionized Innovate Tech’s operations, propelling us forward.
        <br /> Their responsive team and solutions are instrumental to our
        success
      </span>,
    ],
  },
];

const swpslide = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

export default function Testimonial() {
  return (
    <div className="testMain">
      <div className="testWrapper">
        <div className="testUpper">
          <span className="subTitle">TESTIMONIALS</span>
          <br />
          <span className="spnTitle">
            <span className="testBold"> Clients Speak for</span>
            <span className="testGreen"> Mexil Software</span>
          </span>
        </div>

        <Swiper
          className="testLower"
          modules={[Mousewheel, Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          mousewheel={{ forceToAxis: true }}
          navigation={{ clickable: true }}
          touchRatio={1.5}
          simulateTouch={true}
        >
          {swpslide.map((sld) => {
            return (
              <SwiperSlide key={sld.id} className="testLowerMap">
                {cad.map((cadd) => {
                  return (
                    <div
                      key={cadd.id}
                      className="testmap"
                      style={{
                        borderRadius: "9px",
                        padding: "22px 15px",
                        width: "fit-content",
                        boxShadow: "1px 1px 6px 0",
                        margin: "15px 0px",
                      }}
                    >
                      <div className="testmapUpper">
                        <div className="pfp">
                          <img className="pfpp" src={cadd.pfp} alt="" />
                        </div>
                        <div className="status">
                          <div className="name">
                            <span className="username">{cadd.name}</span>
                            <img src={cadd.status} alt="" className="statuss" />
                          </div>
                          <div className="country">
                            <img src={cadd.flag} alt="" />
                            <span className="cnt">{cadd.city}</span>
                          </div>
                          <div className="stary">
                            <img src={cadd.star} alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="testmapLower">
                        <span className="testDesc">{cadd.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
