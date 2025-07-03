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
      <label style={{ fontFamily: "Inter", fontSize: "13px" }}>
        I have read and accepted the privacy policy
      </label>
    </div>
  );
});

const SubmitButton = React.memo(({ onSubmit }) => {
  console.log("SubmitButton rendered");
  return (
    <button type="submit" className="button" onClick={onSubmit}>
      Create Account
    </button>
  );
});

export default function Signup() {
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
      const res = await fetch("http://localhost:5000/api/signup", {
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
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Inter" }}>Signup</h1>
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
            value={dataaa.username || ""}
            onChange={handleChange}
            placeholder="Your Name"
            type="text"
          />
          <TextInput
            name="mail"
            value={dataaa.mail || ""}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
          />
          <TextInput
            name="phone"
            value={dataaa.phone || ""}
            onChange={handleChange}
            placeholder="Your Phone Number"
            type="tel"
          />
          <TextInput
            name="password"
            value={dataaa.password || ""}
            onChange={handleChange}
            placeholder="Enter Password"
            type="password"
          />
          <TextInput
            name="confirmPassword"
            value={dataaa.confirmPassword || ""}
            onChange={handleChange}
            placeholder="Confirm Password"
            type="password"
          />
          <CheckboxInput
            name="privacy"
            checked={dataaa.privacy || false}
            onChange={handleChange}
          />
          <SubmitButton onSubmit={handleSubmit} />
          {message && (
            <div
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: message.includes("Error")
                  ? "#ffebee"
                  : "#e8f5e8",
                color: message.includes("Error") ? "#c62828" : "#2e7d32",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
