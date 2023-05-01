import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./UserProfile.css";
import Button from "../login/Button";
import { userProfileData } from "/Users/mac/PROJET_1CS/projet/src/data/dummy";
import { UseStateContext } from "/Users/mac/PROJET_1CS/projet/src/contexts/ContextProvider";
import avatar from "/Users/mac/PROJET_1CS/projet/src/data/avatar.jpg";

const UserProfile = () => {
  const { currentColor } = UseStateContext();
  const { setIsClicked } = UseStateContext();
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="  flexi justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button
          type="button"
          onClick={() => setIsClicked(false)}
          style={{
            color: "#2b6777",
            borderRadius: "10px",
            borderColor: "transparent",
          }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <hr className="trait_"></hr>
      <div className="flexi gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            Tbahriti Mohamed{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            m.tbahriti@esi-sba.dz{" "}
          </p>
        </div>
      </div>
      <hr className="trait_"></hr>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flexi gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor="#2b6777"
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;
