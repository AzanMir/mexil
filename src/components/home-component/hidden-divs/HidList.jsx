import { useState } from "react";
import "./hidList.css";

const questionMap = [
  {
    id: 1,
    title: "What mobile app development services do you offer?",
  },
  {
    id: 2,
    title: "What is the average cost and timeline for developing software?",
  },
  {
    id: 3,
    title: "Do you offer ongoing maintenance and support services?",
  },
  {
    id: 4,
    title: "Do you develop software for both mobile and web platforms?",
  },
  {
    id: 5,
    title: "What software development services do you offer?",
  },
  {
    id: 6,
    title:
      "How do you ensure the security and quality of the software you develop?",
  },
  {
    id: 7,
    title: "Do you assist with software integration and data migration?",
  },
];

export default function HidList() {
  const [visible, setvisible] = useState(false);
  const [idd, setidd] = useState(null);

  const handlevisible = (id) => {
    setvisible((prev) => (idd === id && prev ? false : true));
    setidd(id);
  };

  return (
    <div className="hidMain">
      <div
        style={{
          margin: "50px 0px",
          fontFamily: "Inter",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="hidWrapper"
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "600",
          }}
          className="hidUpper"
        >
          Frequently Asked Questions
        </div>

        {questionMap.map((qmap) => {
          return (
            <div
              style={{
                marginTop: "30PX",
              }}
              className="hidLower"
              key={qmap.id}
            >
              <div
                onClick={() => handlevisible(qmap.id)}
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  padding: "30px 0px",
                  borderBottom: "2px solid ",
                  display: "flex",
                  width: "1000px",
                  justifyContent: "space-between",
                  marginBottom: "40px",
                }}
                className="lowerDis"
              >
                <div>{qmap.title}</div>
                <div style={{ cursor: "pointer" }} className="hidSymbol">
                  {visible && qmap.id === idd ? "-" : "+"}
                </div>
              </div>
              {visible && qmap.id === idd && (
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                  className="lowerHid"
                >
                  The cost and timeline for developing a software can vary
                  significantly based on factors such as:
                  <ul>
                    <li>Project complexity and functionality</li>
                    <li>Platform compatibility (iOS, Android, or both)</li>
                    <li>Design requirements (basic UI/UX vs. custom design)</li>
                    <li>Integration with third-party APIs or systems</li>
                    <li>Post-launch maintenance and support needs</li>
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
