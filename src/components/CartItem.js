import React from 'react'
import './Cartitem.css'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51mAkcVFtVL._AC_SY879_.jpg" alt="iPad Pro"></img>
                </div>
                <div className="CartItem-info">
                    <div className="info-title">
                        <h2>Apple iPad Pro</h2>
                    </div>
                    <div className="info-stock">
                        In Stock
                    </div>
                    <div className="item-actions">
                        <div className="item-quantity">
                         <select>
                             <option value="1">Qty: 1</option>
                             <option value="2">Qty: 2</option>
                             <option value="3">Qty: 3</option>
                         </select>
                        </div>
                        <div className="item-actions-divider">|</div>
                        <div className="item-delete">
                            Delete
                        </div>
                    </div>
                </div>
                <div className="CartItem-price">
                    $796.00
                </div>
        </div>
    )
}

export default CartItem