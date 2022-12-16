import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: title,
        price: price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
