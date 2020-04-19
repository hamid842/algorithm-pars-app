import React, { Component } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import menuIcon from "../assets/images/menu-icon.png";

class TopNavigation extends Component {
  render() {
    return (
      <>
        <div className=" top-navigation">
          <div>
            <a href="!#">
              <img src={menuIcon} alt="" className="menu-icon mr-2" />
            </a>
          </div>
          <div className="user-info ">
            <span>
              <IconContext.Provider value={{ size: "1.5vw" }}>
                <a className="setting-icon" href="!#">
                  {" "}
                  <AiOutlineSetting />
                </a>
              </IconContext.Provider>
            </span>

            <span className="user-icon">
              <IconContext.Provider value={{ size: "1.2vw" }}>
                <AiOutlineUser />
              </IconContext.Provider>
            </span>
            <span className="algo-pars">
              <a href="!#" className="text-dark mr-2">
                شرکت داده پردازی الگوریتم پارس
              </a>
            </span>
            <span>
              <a className="arrow-down" href="!#">
                {" "}
                <IoIosArrowDown />
              </a>
            </span>
          </div>
        </div>
      </>
    );
  }
}
export default TopNavigation;
