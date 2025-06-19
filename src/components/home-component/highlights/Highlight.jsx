import "./highlight.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

const high = [
  {
    id: 1,
    title: "Sublime Energy Services",
    src: "/assets/h1.png",
    desc: [
      <span>
        We provide energy efficiency services that are <br /> entirely 100%
        hassle-free, enabling homeowners <br /> and tenants to access the
        government-funded <br /> Energy Company Obligation (ECO) effortlessly.
      </span>,
    ],
    lang1: "HTML 5",
    lang2: "CSS",
    lang3: "Laravel",
    lang4: "MySQL",
    background:
      "linear-gradient(to right, rgba(94, 143, 164, 1), rgba(35, 84, 104, 1))",
  },
  {
    id: 2,
    title: "AT’HADAK",
    src: "/assets/h1.png",
    desc: [
      <span>
        We provide energy efficiency services that are <br /> entirely 100%
        hassle-free, enabling homeowners <br /> and tenants to access the
        government-funded <br /> Energy Company Obligation (ECO) effortlessly.
      </span>,
    ],
    lang1: "Angular",
    lang2: "CSS",
    lang3: "Laravel",
    lang4: "MySQL",
    background:
      "linear-gradient(to right,rgba(55, 169, 182, 1), rgba(4, 11, 12, 1))",
  },
  {
    id: 3,
    title: "Sublime Energy Services",
    src: "/assets/h1.png",
    desc: [
      <span>
        We provide energy efficiency services that are <br /> entirely 100%
        hassle-free, enabling homeowners <br /> and tenants to access the
        government-funded <br /> Energy Company Obligation (ECO) effortlessly.
      </span>,
    ],
    lang1: "Angular",
    lang2: "CSS",
    lang3: "Laravel",
    lang4: "MySQL",
    background:
      "linear-gradient(to right, rgba(94, 143, 164, 1), rgba(35, 84, 104, 1))",
  },
  {
    id: 4,
    title: "AT’HADAK",
    src: "/assets/h1.png",
    desc: [
      <span>
        We provide energy efficiency services that are <br /> entirely 100%
        hassle-free, enabling homeowners <br /> and tenants to access the
        government-funded <br /> Energy Company Obligation (ECO) effortlessly.
      </span>,
    ],
    lang1: "HTML 5",
    lang2: "CSS",
    lang3: "Laravel",
    lang4: "MySQL",
    background:
      "linear-gradient(to right,rgba(55, 169, 182, 1), rgba(4, 11, 12, 1))",
  },
  {
    id: 5,
    title: "Sublime Energy Services",
    src: "/assets/h1.png",
    desc: [
      <span>
        We provide energy efficiency services that are <br /> entirely 100%
        hassle-free, enabling homeowners <br /> and tenants to access the
        government-funded <br /> Energy Company Obligation (ECO) effortlessly.
      </span>,
    ],
    lang1: "Angular",
    lang2: "CSS",
    lang3: "Laravel",
    lang4: "MySQL",
    background:
      "linear-gradient(to right, rgba(94, 143, 164, 1), rgba(35, 84, 104, 1))",
  },
];

export default function Highlight() {
  return (
    <div className="highMain">
      <div className="highWrapper">
        <div className="div1">
          <div className="Left1">
            <span className="Bold1">Custom Software</span>
            <span className="Green1"> Development Highlights</span>
          </div>
          <div className="Right1">View More</div>
        </div>

        <div className="div2">
          <Swiper
            modules={[Mousewheel]}
            slidesPerView={1.5}
            spaceBetween={30}
            pagination={{ clickable: true }}
            mousewheel={{ forceToAxis: true }}
            touchRatio={1.5}
            simulateTouch={true}
            className="main2"
            style={{ display: "flex" }}
          >
            {high.map((highl) => {
              return (
                <SwiperSlide
                  className="highMap"
                  key={highl.id}
                  style={{
                    width: "800px",
                    display: "flex",
                    background: highl.background,
                  }}
                >
                  <div className="highMapLeft">
                    <div className="divv1">{highl.title}</div>
                    <div className="divv2">{highl.desc}</div>
                    <div className="divv3">
                      <span className="span1">{highl.lang1}</span>
                      <span className="span1">{highl.lang2}</span>
                      <span className="span1">{highl.lang3}</span>
                      <span className="span1">{highl.lang4}</span>
                    </div>
                    <div className="divv4">
                      <div className="highButton">View Case Study</div>
                    </div>
                  </div>
                  <div className="highMapRight">
                    <img src={highl.src} alt="" className="mapImage" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="div3">
          <div className="dot">
            <img src="/assets/dots.png" alt="" />
          </div>
          <div className="arrow">
            <img src="/assets/arrows.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
