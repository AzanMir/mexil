export default function Team() {
  return (
    <div
      style={{
        marginBottom: "50px",
      }}
      className="teamMain"
    >
      <div
        className="teamWrapper"
        style={{
          backgroundImage: `url("/assets/t1.png")`,
          margin: "0px 40px",
          fontFamily: "Inter",
          color: "White",
          padding: "50px",
          height: "380px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            fontSize: "46px",
            fontWeight: "600",
          }}
          className="iv1"
        >
          Dedicated software development teams
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "500",
          }}
          className="iv2"
        >
          <span>
            We work with tight timelines and complex requirements. As a seamless
            extension <br /> of your team, we ensure your project is set to
            deliver real value.
          </span>
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "600",
            padding: "19px 58px",
            backgroundColor: "rgba(61, 139, 81, 1)",
            width: "fit-content",
            borderRadius: "6px",
          }}
          className="iv3"
        >
          Learn More
        </div>
      </div>
    </div>
  );
}
