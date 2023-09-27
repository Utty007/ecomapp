import Style from "./Header.module.css";
import sneakersLogo from "../../Images/logo.svg";
import cartICon from "../../Images/icon-cart.svg";
import avatar from "../../Images/image-avatar.png";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { useSelector } from "react-redux";
import menuBar from "../../Images/icon-menu.svg";
import closeBar from "../../Images/icon-close.svg";

const Header = (props) => {
  const dispatch = useDispatch();
  const navBarState = useSelector((state) => state.ui.navBarIsVisible);

  const navBarToggleHandler = () => {
    dispatch(uiActions.toggleNavbar());
  };
  const displayCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const displayCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <div className={Style.Header}>
      <div className={Style.sideOne}>
        {navBarState ? (
          <img
            onClick={navBarToggleHandler}
            className={Style.menuBar}
            src={closeBar}
          />
        ) : (
          <img
            onClick={navBarToggleHandler}
            className={Style.menuBar}
            src={menuBar}
          />
        )}
        <div>
          <img src={sneakersLogo} />
        </div>
        <div className={Style.Links}>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className={Style.iCon}>
        <div style={{ position: "relative" }}>
          <span
            style={{ cursor: "pointer" }}
            onClick={displayCartHandler}
            className={Style.cartNum}
          >
            {cartQuantity}
          </span>
          <img
            style={{ cursor: "pointer" }}
            onClick={displayCartHandler}
            src={cartICon}
          />
          {displayCart && <Cart />}
        </div>
        <img src={avatar} className={Style.avatar} />
      </div>
    </div>
  );
};

export default Header;
