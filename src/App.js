import AppRoutes from "./AppRoutes";
import { cntxt } from "./context/Context";
import { useState } from "react";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
function App() {
  const initialState = {
    username: "",
    mail: "",
    phone: "",
    option: "",
    txt: "",
  };

  const [dataaa, setdataaa] = useState(initialState);

  return (
    <cntxt.Provider value={{ dataaa, setdataaa }}>
      <div>
        <Signup />
      </div>
    </cntxt.Provider>
  );
}

export default App;
