import Style from "./Main.module.css";
import CartIcon from "../UI/CartIcon";
import Carousel from "../carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { useState } from "react";
import Popup from "../UI/PopUp";

const Main = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const dispatch = useDispatch();
  const CartItem = useSelector((state) => state.cart.items);

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        title: "Fall Limited Edition Sneakers",
        price: 125,
        id: "p1",
      })
    );

    setPopupMessage("Item added to cart!");
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const removeItemFromCartHandler = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id: "p1",
      })
    );

    if (CartItem.length !== 0) {
      setPopupMessage("Item removed from cart!");
      setShowPopup(true);

      // Close the popup after 3 seconds (adjust as needed)
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };
  return (
    <div className={Style.Main}>
      <div className={Style.Part1}>
        <Carousel />
      </div>
      <div className={Style.part2}>
        <p className={Style.companyName}>Sneaker Company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className={Style.details}>
          These low profile sneakers are perfect for your casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className={Style.promoPricing}>
          <span>$125.00</span> <span>50%</span>
        </div>
        <p className={Style.actualPrice}> $250.00</p>
        <div className={Style.cartFunctionalities}>
          <span className={Style.cartFunction}>
            <button className={Style.btn} onClick={removeItemFromCartHandler}>
              -
            </button>
            <p>0</p>
            <button className={Style.btn} onClick={addItemToCartHandler}>
              +
            </button>
          </span>
          <span>
            <button className={Style.cta} onClick={addItemToCartHandler}>
              {" "}
              <CartIcon />
              Add to cart
            </button>
          </span>
        </div>
      </div>
      {showPopup && (
        <Popup message={popupMessage} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default Main;
