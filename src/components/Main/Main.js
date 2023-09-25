import Style from "./Main.module.css";
import CartIcon from "../UI/CartIcon";
import Carousel from "../carousel/Carousel";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Main = () => {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        title: "Fall Limited Edition Sneakers",
        price: 125,
        id: "p1",
      })
    );
  };

  const removeItemFromCartHandler = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id: "p1",
      })
    );
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
    </div>
  );
};

export default Main;
