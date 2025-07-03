import AppRoutes from "./AppRoutes";
import { cntxt } from "./context/Context";
import { useState } from "react";
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
        <AppRoutes />
      </div>
    </cntxt.Provider>
  );
}

export default App;
