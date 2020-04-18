import React, { Component } from "react";
import userPic from "../assets/images/user-pic.png";

class RightNavigation extends Component {
  state = {
    firstName: "حمید",
    lastName: "محمدی",
    role: "کاربر ارشد",
  };
  render() {
    const { firstName, lastName, role } = this.state;
    return (
      <div className="right-navigation ">
        <div className="container">
          <div className="user">
            <span className="online-sign rounded-circle"></span>
            <img src={userPic} alt="" className="user-pic rounded-circle " />
            <p className="name">
              <span className="first-name m-1">{firstName}</span>
              <span className="last-name">{lastName}</span>
            </p>
            <p>
              <span>{role}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default RightNavigation;
