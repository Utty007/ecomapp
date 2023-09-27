import Styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={Styles.Backdrop}></div>;
};

export default Backdrop;
