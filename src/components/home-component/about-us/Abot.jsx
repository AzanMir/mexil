import "./abot.css";

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
          <div className="tp">About Us</div>
          <div className="tpsec"></div>
          <div className="tpthird"></div>
          <div className="btm"></div>
        </div>
      </div>
    </div>
  );
}
