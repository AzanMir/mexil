import "./tech.css";

const maps = [
  {
    id: 1,
    title: "IOS",
    items: ["Swift", "UI Kit", "RxSwift", "Swift", "CoreData", "RxSwift"],
  },
  {
    id: 2,
    title: "Android",
    items: ["Swift", "UI Kit", "RxSwift", "Swift", "CoreData", "RxSwift"],
  },
];

export default function Tech() {
  return (
    <div className="techMain">
      <div className="techWrapper">
        <div className="techUpper">
          <span className="techUpperSpan1">
            <span className="techGreen">Technologies</span>
            <span className="techBold"> we use</span>
          </span>
          <br />
          <br />
          <span className="techUpperSpan2">
            Hire from our pool of 350+ specialized experts in web, mobile, and
            software <br /> engineering, specializing in the latest technologies
            and frameworks, ready to <br /> scale your development teams
            effortlessly.
          </span>
        </div>

        <div className="techLower">
          <div className="techLowerLeft">
            <div className="dv">Mobile Apps</div>
            <div className="dv">Web platforms</div>
            <div className="dv">UI UX Design</div>
            <div className="dv">Web Development</div>
            <div className="dv">DevOps & Cloud Services</div>
            <div className="dv">Custom Services & SaaS</div>
            <div className="dv">QA & Testing</div>
          </div>

          <div className="techLowerRight">
            {maps.map((opt) => {
              return (
                <div key={opt.id} className="ma1">
                  <div className="optTitle">{opt.title}</div>
                  <div className="optOptions">
                    {opt.items.map((itm) => {
                      return (
                        <div className="itmMap">
                          <img
                            className="birdy"
                            src="/assets/bird.png"
                            alt=""
                          />
                          <span className="itmOpt">{itm}</span>
                        </div>
                      );
                    })}
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
