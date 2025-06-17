import "./stat.css";

const stats = [
  {
    id: 1,
    title: "1800+",
    desc: "Completed Projects",
  },
  {
    id: 2,
    title: "21+",
    desc: "Years of Experience",
  },
  {
    id: 3,
    title: "530+",
    desc: "Global Customers",
  },
  {
    id: 4,
    title: "36+",
    desc: "Countries Clients Served",
  },
];
export default function Stat() {
  return (
    <div className="statmain">
      <div className="statWrapper">
        <div className="statLeft">
          <span className="statTitle"> Delivering Results that Matter </span>
          <br />
          <div className="statDesc">
            Our solutions have transformed industries and driven
            <br /> measurable growth, establishing us amongst globally
            <br /> leading software development firms.
          </div>
          <span className="statButton">Contact Us Now</span>
        </div>

        <div className="statRight">
          {stats.map((statis, index) => (
            <div key={statis.id} className="statmap">
              <span className="innerStatTitle">{statis.title}</span>
              <br />
              <span className="innerStatDesc">{statis.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
