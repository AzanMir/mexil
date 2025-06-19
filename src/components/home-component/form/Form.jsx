import "./form.css";

export default function Form() {
  return (
    <div className="formMain">
      <div
        style={{
          backgroundColor: "rgba(245, 245, 245, 1)",
          padding: "70px 50px 10px 50px",
          display: "flex",
        }}
        className="formWrapper"
      >
        <div
          style={{
            width: "fit-content",
          }}
          className="formLeft"
        >
          <div
            style={{
              padding: "19px 58px",
              fontFamily: "Inter",
              border: "1px solid rgba(76, 175, 79, 1) ",
              width: "fit-content",
              borderRadius: "6px",
            }}
            className="ivv1"
          >
            Let’s Partner Up
          </div>
          <div
            style={{
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontFamily: "Inter",
              padding: "20px 0px",
            }}
            className="ivv2"
          >
            <div
              className="indiv1"
              style={{
                fontWeight: "600px",
                fontSize: "40px",
              }}
            >
              <span className="formBold">We’re Just a </span>
              <span
                style={{
                  color: "rgba(76, 175, 79, 1)",
                }}
                className="formGreen"
              >
                message away!
              </span>
            </div>
            <div
              style={{
                display: "flex",
              }}
              className="indiv2"
            >
              <span
                style={{
                  marginRight: "30px",
                }}
              >
                <img src="/assets/f2.png" />
              </span>
              <span>We will respond to you within 24 hours</span>
            </div>

            <div
              style={{
                display: "flex",
              }}
              className="indiv3"
            >
              <span
                style={{
                  marginRight: "30px",
                }}
              >
                <img src="/assets/f2.png" />
              </span>
              <span>
                You'll be talking to your product and tech experts <br /> ( no
                account manager){" "}
              </span>
            </div>
          </div>

          <div className="ivv3">
            <img
              style={{
                borderRadius: "9px",
              }}
              src="/assets/f1.png"
              alt=""
              className="formImg"
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
          }}
          className="formRight"
        >
          <input placeholder="Your Name" type="text" className="boxes" />
          <input placeholder="Your Email" type="email" className="boxes" />
          <input placeholder="Your Phone Number" type="tel" className="boxes" />
          <select
            style={{
              width: "430px",
              height: "50px",
            }}
            placeholder="Service I need"
            className="boxes"
          >
            <option disabled selected>
              Service I need
            </option>
            <option>Html</option>
            <option>CSS</option>
            <option>JS</option>
            <option>React</option>
          </select>
          <textarea
            placeholder="Your message here"
            className="boxes"
            style={{
              height: "90px",
            }}
          ></textarea>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              style={{
                marginRight: "20px",
                height: "25px",
                width: "25px",
              }}
              type="checkbox"
            />
            <label
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              I have read and accepted the privacy policy
            </label>
          </div>
          <button
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: "22px",
              padding: "9px 16px",
              backgroundColor: "rgba(76, 175, 79, 1)",
              width: "fit-content",
              borderRadius: "6px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            type="submit"
            className="button"
          >
            Send us a message!
          </button>
        </div>
      </div>
    </div>
  );
}
