import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, total, price } = props;

  const dispatch = useDispatch();

  const addInCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        name: title,
        price: price,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addInCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
