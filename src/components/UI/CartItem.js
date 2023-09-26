import Styles from "./CartItem.module.css";
import deleteIcon from "../../Images/icon-delete.svg";
import itemImage from "../../Images/image-product-1-thumbnail.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const deleteItemFromCartHandler = () => {
    dispatch(
      cartActions.deleteItemFromCart({
        id: props.id,
      })
    );
  };
  return (
    <div className={Styles.CartItem}>
      <span className={Styles.itemImage}>
        <img src={itemImage} />
      </span>
      <span className={Styles.text}>
        <span>{props.title}</span>
        <span>
          {`${props.price} x ${props.quantity}`}{" "}
          <span className={Styles.price}>
            <p>${props.totalAmount.toFixed(2)}</p>
          </span>
        </span>
      </span>
      <span className={Styles.deleteIcon}>
        <img
          style={{ cursor: "pointer" }}
          onClick={deleteItemFromCartHandler}
          src={deleteIcon}
        />
      </span>
    </div>
  );
};

export default CartItem;
