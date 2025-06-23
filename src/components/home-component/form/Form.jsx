import "./form.css";
import { useReducer } from "react";

const initialState = {
  username: "",
  mail: "",
  phone: "",
  option: "",
  txt: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Update":
      return { ...state, [action.field]: action.value };

    default:
      return state;
  }
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("State: ", state);

  const submt = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", state.username);
    formData.append("mail", state.mail);
    formData.append("phone", state.phone);
    formData.append("option", state.option);
    formData.append("txt", state.txt);

    console.log("Submitted: ", {
      username: state.username,
      mail: state.mail,
      phone: state.phone,
      option: state.option,
      txt: state.txt,
    });
  };
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
          <form onSubmit={submt}>
            <input
              value={state.username}
              onChange={(e) =>
                dispatch({
                  type: "Update",
                  field: "username",
                  value: e.target.value,
                })
              }
              placeholder="Your Name"
              type="text"
              className="boxes"
            />
            <input
              value={state.mail}
              onChange={(e) =>
                dispatch({
                  type: "Update",
                  field: "mail",
                  value: e.target.value,
                })
              }
              placeholder="Your Email"
              type="email"
              className="boxes"
            />
            <input
              value={state.phone}
              onChange={(e) =>
                dispatch({
                  type: "Update",
                  field: "phone",
                  value: e.target.value,
                })
              }
              placeholder="Your Phone Number"
              type="tel"
              className="boxes"
            />
            <select
              value={state.option}
              onChange={(e) =>
                dispatch({
                  type: "Update",
                  field: "option",
                  value: e.target.value,
                })
              }
              style={{
                width: "430px",
                height: "50px",
              }}
              placeholder="Service I need"
              className="boxes"
            >
              <option value="" disabled selected>
                Service I need
              </option>
              <option>Html</option>
              <option>CSS</option>
              <option>JS</option>
              <option>React</option>
            </select>
            <textarea
              value={state.txt}
              onChange={(e) =>
                dispatch({
                  type: "Update",
                  field: "txt",
                  value: e.target.value,
                })
              }
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
          </form>
        </div>
      </div>
    </div>
  );
}
