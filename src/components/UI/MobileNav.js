import React from "react";
import Styles from "./MobileNav.module.css";
import { UseSelector, useSelector } from "react-redux";

const MobileNav = (props) => {
  const navBarState = useSelector((state) => state.ui.navBarIsVisible);
  return (
    <div
      className={`${Styles.MobileNav} ${
        navBarState ? Styles.slideIn : Styles.slideOut
      }`}
    >
      <div className={Styles.Links}>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default MobileNav;
