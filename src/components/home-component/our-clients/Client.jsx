import "./client.css";

const loggo = [
  {
    id: 1,
    src: "/assets/Logo1.png",
  },
  {
    id: 2,
    src: "/assets/Logo2.png",
  },
  {
    id: 3,
    src: "/assets/Logo3.png",
  },
  {
    id: 4,
    src: "/assets/Logo4.png",
  },
  {
    id: 5,
    src: "/assets/Logo5.png",
  },
  {
    id: 6,
    src: "/assets/Logo6.png",
  },
  {
    id: 7,
    src: "/assets/Logo7.png",
  },
];

export default function Client() {
  return (
    <div className="mainn">
      <div className="mainnWrapper">
        <div className="uppeer">
          <span className="clientTitle">
            <span className="bld">Our</span>{" "}
            <span className="gren">Clients</span>
          </span>
          <br />
          <span className="clientDesc">
            We have been working with some Fortune 500+ clients
          </span>
        </div>

        <div className="lower">
          {loggo.map((loggoo, index) => (
            <div className="mapp" key={loggoo.id}>
              <div className="images">
                <img src={loggoo.src}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
