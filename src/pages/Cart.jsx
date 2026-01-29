import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    selectCartItems,
    selectCartTotal,
    removeFromCart,
    updateQuantity
} from '../store/cartSlice'
import './Cart.css'

const Cart = () => {
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    const dispatch = useDispatch();

    if (items.length === 0) {
        return (
            <div className="cart-page-empty">
                <div className="empty-content fade-in-up">
                    <h1>Your Bag is Empty</h1>
                    <p>Discover our latest collection of timeless masterpieces.</p>
                    <Link to="/shop" className="shop-link-btn">Return to Shop</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="cart-page">
            <div className="cart-bg"></div>
            <div className="container cart-container">
                <h1 className="cart-title fade-in-up">Shopping <span className="gold-text">Bag</span></h1>

                <div className="cart-layout fade-in-up delay-1">
                    <div className="cart-list">
                        <div className="cart-header-row">
                            <span>Product</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>
                        {items.map(item => (
                            <div key={item.id} className="cart-row glass-panel">
                                <div className="product-col">
                                    <div className="cart-thumb">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="product-meta">
                                        <h3>{item.name}</h3>
                                        <span className="price-unit">{item.price}</span>
                                        <button className="delete-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                    </div>
                                </div>
                                <div className="qty-col">
                                    <div className="qty-control-large">
                                        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                                    </div>
                                </div>
                                <div className="total-col">
                                    {/* Simplified calculation for display, ideally parse cleaner */}
                                    {item.price}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary glass-panel sticky-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>€{total.toLocaleString()}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Calculated at next step</span>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>€{total.toLocaleString()}</span>
                        </div>
                        <button className="checkout-btn-large">Proceed to Checkout</button>
                        <p className="summary-note">Taxes and duties calculated at checkout.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
