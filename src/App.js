import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import { useState } from "react";
import LoginSucces from "/Users/mac/PROJET_1CS/projet/src/components/login/loginSucces";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UseStateContext } from "/Users/mac/PROJET_1CS/projet/src/contexts/ContextProvider";

function App() {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = UseStateContext();
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <BrowserRouter>
      <main className="main">
        {" "}
        <div>
          {" "}
          {!formIsSubmitted ? (
            <Login submitForm={submitForm} />
          ) : (
            <LoginSucces />
          )}{" "}
        </div>{" "}
      </main>{" "}
    </BrowserRouter>
  );
}

export default App;
