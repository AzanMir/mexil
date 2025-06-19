import "./choose.css";

const chImage = [
  {
    id: 1,
    title: "Time Efficiency",
    desc: [
      <span>
        Save time by scheduling and automating <br />
        social media posts one place.
      </span>,
    ],
    src: "/assets/c1.png",
  },
  {
    id: 2,
    title: "Streamlined Workflow",
    desc: [
      <span>
        Automate repetitive tasks and focus on
        <br />
        strategic initiatives.
      </span>,
    ],
    src: "/assets/c2.png",
  },
  {
    id: 3,
    title: "Enhanced Engagement",
    desc: [
      <span>
        Mexil is designed for enhanced
        <br />
        connection with your audience.
      </span>,
    ],
    src: "/assets/c3.png",
  },
  {
    id: 4,
    title: "Improved Analytics",
    desc: [
      <span>
        Enhance your social media strategy with
        <br />
        actionable insights.
      </span>,
    ],
    src: "/assets/c4.png",
  },
  {
    id: 5,
    title: "Content Optimization",
    desc: [
      <span>
        Curate relevant content, ensuring a
        <br />
        consistent flow of valuable information.
      </span>,
    ],
    src: "/assets/c5.png",
  },
  {
    id: 6,
    title: "Team Collaboration",
    desc: [
      <span>
        Create, edit, and finalize content
        <br />
        together with your team.
      </span>,
    ],
    src: "/assets/c6.png",
  },
];

export default function Choose() {
  return (
    <div className="chooseMain">
      <div className="chooseWrapper">
        <div className="chooseUpper">
          <span className="chooseTitle">
            <span className="chooseBold">Why</span>
            <span className="chooseGreen">Choose Us?</span>
          </span>
          <br />
          <br />
          <span className="chooseDesc">
            Mexil Software offers efficiency, analytics, scheduling, automation,
            and <br />
            many more to empower customers.
          </span>
        </div>

        <div className="chooseLower">
          <div className="lowerWrapper">
            {chImage.map((chmg) => {
              return (
                <div key={chmg.id} className="mapMain">
                  <img src={chmg.src} alt="" className="mapUpper" />
                  <div className="mapCenter">{chmg.title}</div>
                  <div className="mapLower">{chmg.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
