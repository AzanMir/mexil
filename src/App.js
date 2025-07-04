import AppRoutes from "./AppRoutes";
import { cntxt } from "./context/Context";
import { useState } from "react";

function App() {
  const initialState = {
    username: "",
    email: "", // Changed from "mail" to "email"
    phone: "",
    option: "",
    txt: "",
    password: "",
    confirmPassword: "",
    privacy: false,
  };

  const [dataaa, setdataaa] = useState(initialState);
  // **NEW: Add authentication state**
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <cntxt.Provider
      value={{ dataaa, setdataaa, isAuthenticated, setIsAuthenticated }}
    >
      <div>
        <AppRoutes />
      </div>
    </cntxt.Provider>
  );
}

export default App;
