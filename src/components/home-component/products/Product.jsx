import "./product.css";

const cards = [
  {
    id: 1,
    num: "O1/06",
    title: "Ideate",
    desc: [
      <span>
        We analyze your vision thoroughly to ensure the <br /> roadmap is
        perfectly aligned with your end goals,
        <br /> setting the stage for product success.
      </span>,
    ],
    src: "/assets/brain.png",
  },
  {
    id: 2,
    num: "O2/06",
    title: "Design",
    desc: [
      <span>
        We analyze your vision thoroughly to ensure the <br /> roadmap is
        perfectly aligned with your end goals,
        <br /> setting the stage for product success.
      </span>,
    ],
    src: "/assets/brain.png",
  },
  {
    id: 3,
    num: "O3/06",
    title: "Develop",
    desc: [
      <span>
        We analyze your vision thoroughly to ensure the <br /> roadmap is
        perfectly aligned with your end goals,
        <br /> setting the stage for product success.
      </span>,
    ],
    src: "/assets/brain.png",
  },
  {
    id: 4,
    num: "O4/06",
    title: "Test",
    desc: [
      <span>
        We analyze your vision thoroughly to ensure the <br /> roadmap is
        perfectly aligned with your end goals,
        <br /> setting the stage for product success.
      </span>,
    ],
    src: "/assets/brain.png",
  },
  {
    id: 5,
    num: "O5/06",
    title: "Launch",
    desc: [
      <span>
        We analyze your vision thoroughly to ensure the <br /> roadmap is
        perfectly aligned with your end goals,
        <br /> setting the stage for product success.
      </span>,
    ],
    src: "/assets/brain.png",
  },
  {
    id: 6,
    num: "O6/06",
    title: "Support",
    desc: [
      <span>
        We analyze your vision thoroughly to ensure the <br /> roadmap is
        perfectly aligned with your end goals,
        <br /> setting the stage for product success.
      </span>,
    ],
    src: "/assets/brain.png",
  },
];

export default function Product() {
  return (
    <div className="productMain">
      <div className="productWrapper">
        <div className="productUpper">
          <b className="productBold">Our Product </b>
          <br />
          <span className="productGreen">Development Process</span>
        </div>
        <span className="productButton">View More</span>

        <div className="productLower">
          <ul className="productList">
            <div className="productContent">
              {cards.map((card) => {
                return (
                  <li key={card.id} className="template">
                    <div className="leftDiv">
                      <div className="number">{card.num}</div>
                      <div className="tempTitle">{card.title}</div>
                      <div className="tempDesc">{card.desc}</div>
                    </div>

                    <div className="rightDiv">
                      <img src={card.src} alt="" />
                    </div>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
