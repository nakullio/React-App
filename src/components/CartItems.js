import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'

function CartItems({ items, setCartItems }) {
    // create function to change item quantitiy and update total price
    const changeItemQuantity = (e, index) => {
        // when we select a quantity on item, we pass it in here
        // pass in the index
        // using the index we need to change the quantity to the selected on from select option
        // update the item state
        // DO NOT UPDATE THE STATE WITHOUT SETTER FUNCTION
        const newItems = [...items]
        items[index].quantity = e.target.value;
        setCartItems(newItems);

    }


    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
               {items.map((item, index) =>
               <CartItem
                index = {index}
                item={item} // pass the item into cartItem
                key={index} // this is how react track small changes
                changeItemQuantity={changeItemQuantity}


               />
               ) }
               
                
            </div>
        </div>
    )
}

export default CartItems
