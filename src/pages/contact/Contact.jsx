import "./contact.css";
import { useContext } from "react";
import { cntxt } from "../../context/Context";

export default function Contact() {
  const { dataaa, setdataaa } = useContext(cntxt);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdataaa({
      ...dataaa,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", dataaa);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "20px",
        padding: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <input
        name="username"
        value={dataaa.username}
        onChange={handleChange}
        placeholder="Your Name"
        type="text"
        className="boxes"
      />
      <input
        name="mail"
        value={dataaa.mail}
        onChange={handleChange}
        placeholder="Your Email"
        type="email"
        className="boxes"
      />
      <input
        name="phone"
        value={dataaa.phone}
        onChange={handleChange}
        placeholder="Your Phone Number"
        type="tel"
        className="boxes"
      />
      <select
        name="option"
        value={dataaa.option}
        onChange={handleChange}
        className="boxes"
      >
        <option value="" disabled>
          Service I need
        </option>
        <option>Html</option>
        <option>CSS</option>
        <option>JS</option>
        <option>React</option>
      </select>
      <textarea
        name="txt"
        value={dataaa.txt}
        onChange={handleChange}
        placeholder="Your message here"
        className="boxes"
      ></textarea>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input name="privacy" type="checkbox" />
        <label>I have read and accepted the privacy policy</label>
      </div>
      <button type="submit" className="button">
        Send us a message!
      </button>
    </form>
  );
}
