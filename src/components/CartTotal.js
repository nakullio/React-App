import React from 'react'
import './CartTotal.css'
import NumberFormat from 'react-number-format';

function CartTotal({ items }) {

    // using JSX function
    const getTotalPrice = () => {
        // init total price to 0
        // loop through all items in the cart
        // add the price of tiem with the quantity to the total price
        // return the total price
        let total = 0;
        items.forEach((item)=>{
            total += (item.price * item.quantity);   
        })
        return total;
    }

    // const getTotalItem =() => {
    //     let total = 0;
    //     items.forEach((item)=> {
    //         total += item.quantity;
    //     })
    //     return total;
    // }

    return (
        <div className="CartTotal">
            <h3>
                Subtotal({items.length} items):
                <span className="CartTotal-price">
                    <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
                </span>
                </h3>
                <button>
                    Proceed to checkout
                </button>
        </div>
    )
}

export default CartTotal
