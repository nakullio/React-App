import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'

function CartItems({ items }) {
    console.log("Inside cartItems component", items);
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
               {items.map((item, index) =>
               <CartItem
                item={item} // pass the item into cartItem
                key={index} // this is how react track small changes


               />
               ) }
               
                
            </div>
        </div>
    )
}

export default CartItems
