import React, { Component } from "react";
import userPic from "../assets/images/user-pic.png";

class RightNavigation extends Component {
  state = {
    firstName: " امیر حسین",
    lastName: "شادانلو",
    role: "کاربر ارشد",
  };
  render() {
    const { firstName, lastName, role } = this.state;
    return (
      <div className="right-navigation ">
        <div className="container">
          <div className="user">
            <img src={userPic} alt="" className="user-pic rounded-circle " />
            <span className="online-sign rounded-circle "></span>
            <p className="name">
              <span className="first-name">{firstName}</span>&nbsp;
              <span className="last-name ">{lastName}</span>
              <br />
              <small className="role">{role}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default RightNavigation;
