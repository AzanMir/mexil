import "./contact.css";
import { useContext, useCallback, useState } from "react";
import { cntxt } from "../../context/Context";
import React from "react";

const TextInput = React.memo(({ name, value, onChange, placeholder, type }) => {
  console.log(`TextInput rendered: ${name}`);
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="boxes"
    />
  );
});

// Memoized SelectInput component
const SelectInput = React.memo(({ name, value, onChange }) => {
  console.log(`SelectInput rendered: ${name}`);
  return (
    <select name={name} value={value} onChange={onChange} className="boxes">
      <option value="" disabled>
        Service I need
      </option>
      <option>Html</option>
      <option>CSS</option>
      <option>JS</option>
      <option>React</option>
    </select>
  );
});

const TextArea = React.memo(({ name, value, onChange, placeholder }) => {
  console.log(`TextArea rendered: ${name}`);
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="boxes"
    />
  );
});

const CheckboxInput = React.memo(({ name, checked, onChange }) => {
  console.log(`CheckboxInput rendered: ${name}`);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label>I have read and accepted the privacy policy</label>
    </div>
  );
});

const SubmitButton = React.memo(({ onSubmit }) => {
  console.log("SubmitButton rendered");
  return (
    <button type="submit" className="button" onClick={onSubmit}>
      Send us a message!
    </button>
  );
});

export default function Contact() {
  const { dataaa, setdataaa } = useContext(cntxt);
  const [message, setMessage] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setdataaa((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataaa),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setMessage(data.message);
      console.log("Response:", data); // Check browser console
    } catch (error) {
      setMessage("Error: " + error.message);
      console.error("Fetch error:", error); // Check browser console
    }
  };

  return (
    <div className="centralForm">
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
        <TextInput
          name="username"
          value={dataaa.username}
          onChange={handleChange}
          placeholder="Your Name"
          type="text"
        />
        <TextInput
          name="mail"
          value={dataaa.mail}
          onChange={handleChange}
          placeholder="Your Email"
          type="email"
        />
        <TextInput
          name="phone"
          value={dataaa.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          type="tel"
        />
        <SelectInput
          name="option"
          value={dataaa.option}
          onChange={handleChange}
        />
        <TextArea
          name="txt"
          value={dataaa.txt}
          onChange={handleChange}
          placeholder="Your message here"
        />
        <CheckboxInput
          name="privacy"
          checked={dataaa.privacy || false}
          onChange={handleChange}
        />
        <SubmitButton onSubmit={handleSubmit} />
      </form>
    </div>
  );
}
