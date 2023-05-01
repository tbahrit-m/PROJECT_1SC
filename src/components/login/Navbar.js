import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfile from "./UserProfile";
import "/Users/mac/PROJET_1CS/projet/src/App.css";
import avatar from "/Users/mac/PROJET_1CS/projet/src/data/avatar.jpg";

import { UseStateContext } from "/Users/mac/PROJET_1CS/projet/src/contexts/ContextProvider";
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <div content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />{" "}
      {icon}{" "}
    </button>{" "}
  </div>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = UseStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flexi justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        className="Menu"
        title="Menu"
        customFunc={handleActiveMenu}
        color="#2b6777"
        icon={<AiOutlineMenu />}
      />{" "}
      <div className="flexi">
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color="#2b6777"
          icon={<BsChatLeft />}
        />{" "}
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color="#2b6777"
          icon={<RiNotification3Line />}
        />{" "}
        <div content="Profile" position="BottomCenter">
          <div
            className="flexi items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14"> Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Mohamed{" "}
              </span>{" "}
            </p>{" "}
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {isClicked.userProfile && <UserProfile />}{" "}
    </div>
  );
};

export default Navbar;
