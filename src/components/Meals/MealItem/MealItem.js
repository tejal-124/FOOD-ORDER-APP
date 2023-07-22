 import classes from './MealItem.module.css';
 import MealItemForm from './MealItemForm';
 import { useContext } from 'react';
 import CartContext from '../../../store/cart-context';

const MealItem = (props )=> {
   const cartCtx    = useContext(CartContext);

    const priceWithRupeeSymbol = `₹${props.price.toLocaleString("en-IN")}`;
    
    const addToCarthandler = amount => {
     cartCtx.addItem({
      
       id: props.id,
       name: props.name,
       amount: amount,
       price: props.price
      });
    };
    
    
    return (
     <li className={classes.meal}>
    <div>
        <h3>{props.name}</h3>
    <div className={classes.description}>{props.description}</div>
    <p> {priceWithRupeeSymbol}</p>
    </div>
    <div>
       < MealItemForm onAddToCart={addToCarthandler}/>
    </div>
  </li>
  );
};

export default MealItem;