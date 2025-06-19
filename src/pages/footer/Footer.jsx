import "./footer.css";
const fooot = [
  {
    id: 1,
    title: "Company",
    opt1: "About us",
    opt2: "Services",
    opt3: "Projects",
    opt4: "Blog",
    opt5: "Contact Us",
  },
  {
    id: 2,
    title: "Our Services",
    opt1: "Web Development",
    opt2: "Cloud/DevOps",
    opt3: "UI/UX Design",
    opt4: "AI & Blockchain",
    opt5: "QA & Testing",
  },
  {
    id: 3,
    title: "Support",
    opt1: "Help center",
    opt2: "Terms of service",
    opt3: "Legal",
    opt4: "Privacy policy",
    opt5: "Status",
  },
];

export default function Footer() {
  return (
    <div className="footerMain">
      <div
        style={{
          backgroundColor: "rgba(38, 50, 56, 1)",
          color: "white",
          fontFamily: "Inter",
          padding: "50px 60px",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="footerWrapper"
      >
        <div
          style={{
            height: "fit-content",
            width: "fit-content",
          }}
          className="foot1"
        >
          <div className="fot1">
            <img src="/assets/mexill.png" alt="" />
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400px",
              margin: "20px 0px",
            }}
            className="fot2"
          >
            <div className="ft1">Copyright © 2020 Landify UI Kit.</div>
            <br />
            <div className="ft2">All rights reserved</div>
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
            className="fot3"
          >
            <div className="ftt">
              <img src="/assets/foot1.png" alt="" />
            </div>
            <div className="ftt">
              <img src="/assets/foot2.png" alt="" />
            </div>
            <div className="ftt">
              <img src="/assets/foot3.png" alt="" />
            </div>
            <div className="ftt">
              <img src="/assets/foot4.png" alt="" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
          }}
          className="foot2"
        >
          {fooot.map((fit) => {
            return (
              <div className="fit1">
                <div
                  key={fit.id}
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    marginBottom: "30px",
                  }}
                  className="fot1"
                >
                  {fit.title}
                </div>
                <div
                  style={{
                    fontWeight: "400px",
                    fontSize: "14px",
                  }}
                  className="fot2"
                >
                  <div className="fft">{fit.opt1}</div>
                  <div className="fft">{fit.opt2}</div>
                  <div className="fft">{fit.opt3}</div>
                  <div className="fft">{fit.opt4}</div>
                  <div className="fft">{fit.opt5}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="foot3">
          <div
            style={{
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "30px",
            }}
          >
            Stay up to date
          </div>
          <div
            style={{
              width: "fit-content",
              backgroundColor: "rgb(76, 89, 95)",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              borderRadius: "6px",
            }}
          >
            <input
              style={{
                color: "white",
                backgroundColor: "rgb(76, 89, 95)",
                border: "none",
                fontWeight: "400",
                fontSize: "14px",
                height: "20px",
                width: "200px",
              }}
              type="email"
              placeholder="Your email address"
              className="footForm"
            />
            <img
              style={{
                cursor: "pointer",
              }}
              src="/assets/send.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
