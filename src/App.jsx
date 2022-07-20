import React,{ useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome";
 export const credentialsContext = React.createContext();


function App() {
  const credintialState = useState(null)
  return (
    <div className="App">
    <credentialsContext.Provider value={credintialState}>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/register" element= {<Register/>} />
        
      </Routes>
    </credentialsContext.Provider>
    </div>
  );
}

export default App;
