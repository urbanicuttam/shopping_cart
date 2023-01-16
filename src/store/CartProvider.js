import React, {useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
      );

      const existingCartItems = state.items[existingCartItemsIndex];
      let updatedItems;

      if (existingCartItems){
        const updatedItem = {
          ...existingCartItems,
          amount:existingCartItems.amount + action.item.amount
        }

        updatedItems = [...state.items];
        updatedItems[existingCartItemsIndex] = updatedItem;
      } else {
          updatedItems = state.items.concat(action.item);
      }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItems = state.items[existingCartItemsIndex];
    const updatedTotalAmount = state.totalAmount - existingItems.price;
    let updatedItems;

    if(existingItems.amount ===1){
      updatedItems = state.items.filter(item => item.id !== action.id);
    }else{
      const updatedItem = {...existingItems, amount:existingItems.amount - 1}
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};


const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children }
    </CartContext.Provider>
  )
}

export default CartProvider
