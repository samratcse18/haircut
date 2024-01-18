import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../asset/img/logo.png";

function Navbar() {
  const [navState, setNavState] = useState("");
  const [closeState, setCloseState] = useState("hidden");
  const [top, setTop] = useState("top-[1000px]");
  const navClick = () => {
    if (navState != "hidden") {
      setNavState("hidden");
      setCloseState("");
      setTop("top-[0px]");
    }
  };

  const closeClick = () => {
    if (closeState != "hidden") {
      setCloseState("hidden");
      setNavState("");
      setTop("top-[1000px]");
    }
  };
  return (
    <>
      <div
        className={`menubar_bg bg-[#565655] w-full h-[100vh] fixed ${top} duration-700 z-[999]`}
      >
        <ul className="text-center flex flex-col text-[40px] text-white uppercase space-y-9 font-bold justify-center h-screen">
          <li>
            <HashLink smooth to="/ourStory#ourStory" onClick={closeClick}>
              Our Story
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={"/Services#Service"} onClick={closeClick}>
              Premium Services
            </HashLink>
          </li>
          <li>Make an Appointment</li>
          <li>
            <HashLink smooth to={"/Contact#Contact"} onClick={closeClick}>
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
      <nav className="px-2 fixed w-full z-[1000]">
        <div className="flex justify-between">
          <img src={logo} className="h-[70px]" alt="/" />
          <img
            src="https://img.icons8.com/ios/FFFFFF/menu--v1.png"
            className={`bar h-[40px] cursor-pointer ${navState}`}
            onClick={navClick}
          />
          <img
            src="https://img.icons8.com/ios-filled/100/FFFFFF/delete-sign--v1.png"
            className={`close h-[40px] cursor-pointer ${closeState}`}
            onClick={closeClick}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
