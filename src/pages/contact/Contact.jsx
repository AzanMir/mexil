import "./contact.css";
import { useContext, useCallback, useState, useEffect } from "react";
import { cntxt } from "../../context/Context";
import React from "react";
import { useNavigate } from "react-router-dom";

const TextInput = React.memo(({ name, value, onChange, placeholder, type }) => {
  console.log(`TextInput rendered: ${name}, value: ${value}`);
  return (
    <input
      name={name}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="boxes"
    />
  );
});

const SelectInput = React.memo(({ name, value, onChange }) => {
  console.log(`SelectInput rendered: ${name}, value: ${value}`);
  return (
    <select
      name={name}
      value={value || ""}
      onChange={onChange}
      className="boxes"
    >
      <option value="" disabled>
        Service I need
      </option>
      <option value="Html">Html</option>
      <option value="CSS">CSS</option>
      <option value="JS">JS</option>
      <option value="React">React</option>
    </select>
  );
});

const TextArea = React.memo(({ name, value, onChange, placeholder }) => {
  console.log(`TextArea rendered: ${name}, value: ${value}`);
  return (
    <textarea
      name={name}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      className="boxes"
    />
  );
});

const CheckboxInput = React.memo(({ name, checked, onChange }) => {
  console.log(`CheckboxInput rendered: ${name}, checked: ${checked}`);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        name={name}
        type="checkbox"
        checked={checked || false}
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
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      console.log(
        `Field changed: ${name} = ${type === "checkbox" ? checked : value}`
      );
      setdataaa((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    [setdataaa]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate privacy checkbox
    if (!dataaa.privacy) {
      setMessage("Error: You must accept the privacy policy");
      return;
    }

    // Debug: Log current state
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log("Current dataaa state:", dataaa);
    console.log("Individual fields:");
    console.log("- username:", dataaa.username);
    console.log("- email:", dataaa.email);
    console.log("- phone:", dataaa.phone);
    console.log("- option:", dataaa.option);
    console.log("- message:", dataaa.message);
    console.log("================================");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: dataaa.username,
          email: dataaa.email,
          phone: dataaa.phone,
          option: dataaa.option,
          message: dataaa.message,
        }),
      });

      const data = await res.json();
      console.log("Response status:", res.status);
      console.log("Response data:", data);

      if (!res.ok) {
        if (res.status === 401) {
          setMessage("Error: Session expired. Please log in again.");
          setToken("");
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }
        throw new Error(
          `HTTP error! status: ${res.status} - ${data.error || "Unknown error"}`
        );
      }

      setMessage(data.message);
      // Clear form data after successful submission
      setdataaa({
        username: "",
        email: "",
        phone: "",
        option: "",
        message: "",
        privacy: false,
      });
    } catch (error) {
      setMessage("Error: " + error.message);
      console.error("Fetch error:", error);
    }
  };

  // Store token in localStorage when it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

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
          value={dataaa.username || ""}
          onChange={handleChange}
          placeholder="Your Name"
          type="text"
        />
        <TextInput
          name="email"
          value={dataaa.email || ""}
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
        <SelectInput
          name="option"
          value={dataaa.option || ""}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          value={dataaa.message || ""}
          onChange={handleChange}
          placeholder="Your message here"
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
  );
}
