import Style from "./Cart.module.css";
import CartItem from "../UI/CartItem";
import { useSelector } from "react-redux";
import CartIcon from "../UI/CartIcon";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const totalQuantity = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className={Style.Cart}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            id={cartItem.id}
            title={cartItem.name}
            price={cartItem.price}
            quantity={cartItem.quantity}
            totalAmount={cartItem.totalPrice}
          />
        ))
      )}
      {cartItems.length === 0 ? null : (
        <button className={Style.cta}>
          {" "}
          <CartIcon />
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
