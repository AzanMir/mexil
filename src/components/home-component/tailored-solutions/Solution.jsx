import "./solution.css";

const ourSolutions = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Designing and developing tailor-made software applications to meet specific business requirements",
    src: "/assets/webdev.png",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Designing and developing tailor-made software applications to meet specific business requirements",
    src: "/assets/2.png",
  },
  {
    id: 3,
    title: "Custom Software & SaaS",
    description:
      "Designing and developing tailor-made software applications to meet specific business requirements",
    src: "/assets/3.png",
  },
  {
    id: 4,
    title: "DevOps & Cloud Services",
    description:
      "Designing and developing tailor-made software applications to meet specific business requirements",
    src: "/assets/4.png",
  },
  {
    id: 5,
    title: "QA & Testing",
    description:
      "Designing and developing tailor-made software applications to meet specific business requirements",
    src: "/assets/5.png",
  },
  {
    id: 6,
    title: "AI & Blockchain",
    description:
      "Designing and developing tailor-made software applications to meet specific business requirements",
    src: "/assets/6.png",
  },
];

export default function Solution() {
  return (
    <div className="main">
      <div className="upper">
        <b className="boldd">Tailored Solutions for </b>
        <span className="green">Every Business Stage</span>
        <br />
        <div className="regularr">
          We deliver custom software and web development services, specializing
          in data and AI, to help businesses of all sizes optimize their
          operations and boost profitability.
        </div>
        <span className="button">Explore Services</span>
      </div>

      <div
        className="mapp"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {ourSolutions.map((hello, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              margin: "20px",
              borderRadius: "10px",
              padding: "20px",
              gap: "10px",
              width: "500px",
              alignItems: "center",
              backgroundColor: "rgba(247, 248, 248, 1)",
              boxShadow: "4px 4px 6px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "400px",
              }}
              className="col-1"
            >
              <div
                className="cardTitle"
                style={{
                  width: "auto",
                }}
              >
                {hello?.title}
              </div>
              <div className="cardDesc">
                Designing and developing tailor-made software applications to
                meet specific business requirements.
              </div>

              <button className="cardButton">Learn More</button>
            </div>
            <div className="col-2">
              <img src={hello?.src} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
