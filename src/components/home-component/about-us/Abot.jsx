import "./abot.css";

const elementt = [
  {
    id: 1,
    desc: "Data Management Experts",
    src: "/assets/1.png",
  },
  {
    id: 2,
    desc: "Mobile App Developments",
    src: "/assets/1.png",
  },
  {
    id: 3,
    desc: "Website Development",
    src: "/assets/1.png",
  },
  {
    id: 4,
    desc: "Data Analytics Consulting",
    src: "/assets/1.png",
  },
];
export default function Abot() {
  return (
    <div className="main">
      <div className="mainWrapper">
        <div className="left">
          <img src="/assets/about1.png" alt="" className="first" />
          <img src="/assets/about2.png" alt="" className="second" />
          <div className="third">
            <span className="thirdImg">
              <img src="/assets/about3.png" alt="" />
            </span>
            <span className="imgText">
              <span className="boldd">25+</span>
              <br />
              <span className="txt">Years Experience</span>
            </span>
          </div>
        </div>

        <div className="right">
          <button className="tp">About Us</button>
          <div className="tpsec">
            <span className="tpText">Transform Business To Technology</span>
            <br />
            <br />
            <span className="btmText">
              Mexil Software Solutions puts together an exceptional team of
              experts to help you transform your visions into reality. Our team
              has amazing expertise in website design, web development, and
              mobile apps development. The engineering tool we apply will
              accelerate the efficiency and fuel the growth of your clients.
              <br />
              <br />
              Utilizing the power of technology, we deliver end-to-end solutions
              for multi-million dollar sponsored start-ups to small and medium
              ventures. Workmanship and culture inspire us too, and our office
              presence at Houston, Texas is a genuine reflection.
            </span>
          </div>

          <div className="tpthird">
            {elementt.map((elmt, index) => (
              <div className="options" key={elmt.id}>
                <div className="option">
                  <span>
                    <img src="/assets/1.png" alt="" />
                  </span>
                  <span className="elmtdesc">{elmt.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="btm">
            <span className="buttonn">Read More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
