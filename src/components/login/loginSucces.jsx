import { FiSettings } from "react-icons/fi";
import React from "react";
import { useEffect } from "react";

import "./loginSucces.css";
import Logo from "/Users/mac/PROJET_1CS/projet/src/assets/Logo.png";
import "boxicons";
import { Link, NavLink } from "react-router-dom";
import { links } from "/Users/mac/PROJET_1CS/projet/src/data/dummy";
import NavBar from "/Users/mac/PROJET_1CS/projet/src/components/login/Navbar";
import ThemeSettings from "./ThemeSettings";
import { UseStateContext } from "/Users/mac/PROJET_1CS/projet/src/contexts/ContextProvider";
import { color } from "@mui/system";

const LoginSucces = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,

    themeSettings,
    setThemeSettings,
  } = UseStateContext();
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    UseStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const activeLink =
    "flexi items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 bg_";
  const normalLink =
    "flexi items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <main className="container">
      <div className="setting">
        <div content="Settings" position="top">
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: "#2b6777", borderRadius: "50%" }}
            className=" button_setting text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings className="svg" />
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {activeMenu ? (
        <div className="sidebar ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
          <div className="header">
            <Link to="/">
              <img src={Logo} alt="" className="logo_side_bar" />{" "}
            </Link>{" "}
          </div>{" "}
          <hr className="trait" />
          <div className="sidebar_menu">
            <div className="mt-10 ">
              {" "}
              {links.map((item) => (
                <div key={item.title}>
                  <p className=" item "> {item.title} </p>{" "}
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? color : "",
                      })}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon} <span className="name "> {link.name} </span>{" "}
                    </NavLink>
                  ))}{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>
      ) : (
        <div className="sidebar0"> </div>
      )}{" "}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div>
          <NavBar />
        </div>{" "}
        <div> {themeSettings && <ThemeSettings />} </div>{" "}
      </div>{" "}
    </main>
  );
};

export default LoginSucces;
