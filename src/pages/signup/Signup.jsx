import { useContext, useCallback, useState } from "react";
import { cntxt } from "../../context/Context";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setdataaa((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate privacy checkbox
    if (!dataaa.privacy) {
      setMessage("Error: You must accept the privacy policy");
      return;
    }

    // Validate password match
    if (dataaa.password !== dataaa.confirmPassword) {
      setMessage("Error: Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: dataaa.username,
          email: dataaa.email,
          password: dataaa.password,
        }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setMessage(data.message);
      console.log("Response:", data);

      if (res.ok) {
        // Clear form data
        setdataaa({
          username: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          privacy: false,
        });
        navigate("/login");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
      console.error("Fetch error:", error);
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "gray",
          width: "500px",
          borderRadius: "16px",
        }}
      >
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
            <button className="boxes" onClick={goToLogin} type="button">
              Already have an account?
            </button>

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
    </div>
  );
}
