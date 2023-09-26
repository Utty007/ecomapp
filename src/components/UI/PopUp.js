import React, { useState, useEffect } from "react";
import Styles from "./PopUp.module.css";

const Popup = ({ message, onClose }) => {
  //   const [progress, setProgress] = useState(100); // Initial progress: 100%

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={Styles.popup}>
      <div className="popup-content">
        <span>{message}</span>
        <div
          className={Styles.popupProgress}
          //   style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Popup;
