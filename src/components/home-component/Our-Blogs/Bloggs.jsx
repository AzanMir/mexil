import "./bloggs.css";

const blg = [
  {
    id: 1,
    title: "App Development",
    desc: [
      <span>
        Top 10 Cross-Plateform App
        <br /> Development Frameworks
      </span>,
    ],
    src: "/assets/b1.png",
  },
  {
    id: 2,
    title: "Software Development",
    desc: [
      <span>
        CRM Software Examples
        <br /> in Real Life: Practical Use <br />
        Cases
      </span>,
    ],
    src: "/assets/b2.png",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    desc: [
      <span>
        AI in Business Examples: How <br />
        Companies Use Artificial
        <br /> Intelligence
      </span>,
    ],
    src: "/assets/b3.png",
  },
];

export default function Bloggs() {
  return (
    <div className="blogMain">
      <div className="blogWrapper">
        <div className="diiv1">
          <div className="Leftt1">
            <span className="Bold1">Our</span>
            <span className="Greenn1"> Blog</span>
            <br />
            <span className="blogText">
              Bringing dreams to life through innovative solutions!
            </span>
          </div>
          <div className="Rightt1">View More</div>
        </div>

        <div className="diiv2">
          <div className="BlogMap">
            {blg.map((blgg) => {
              return (
                <div key={blgg.id} className="bloggWrapper">
                  <div className="diiiv1">
                    <img src={blgg.src} alt="" />
                  </div>
                  <div className="padDiv">
                    <div className="diiiv2">
                      <span className="blogTitl">{blgg.title}</span>
                      <span className="blogDat">- 23 Apr, 2025</span>
                    </div>
                    <div className="diiiv3">{blgg.desc}</div>

                    <div className="diiiv4">Learn More</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
