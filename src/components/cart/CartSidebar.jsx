import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    toggleCart,
    removeFromCart,
    updateQuantity,
    selectCartItems,
    selectIsCartOpen,
    selectCartTotal
} from '../../store/cartSlice'
import './CartSidebar.css'

const CartSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector(selectCartItems);
    const isOpen = useSelector(selectIsCartOpen);
    const total = useSelector(selectCartTotal);
    const sidebarRef = useRef(null);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) dispatch(toggleCart());
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, dispatch]);

    // Close when clicking outside (handled by overlay wrapper usually or ref check)
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('cart-overlay')) {
            dispatch(toggleCart());
        }
    };

    const handleCheckout = () => {
        dispatch(toggleCart());
        navigate('/cart'); // Or /checkout if you have one
    };

    if (!isOpen) return null;

    return (
        <div className="cart-overlay fade-in" onClick={handleOverlayClick}>
            <div className={`cart-sidebar glass-panel ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
                <div className="cart-header">
                    <h2>Shopping Bag ({items.length})</h2>
                    <button className="close-btn" onClick={() => dispatch(toggleCart())}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="cart-items">
                    {items.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your bag is empty.</p>
                            <button className="shop-now-btn" onClick={() => { dispatch(toggleCart()); navigate('/shop'); }}>
                                DISCOVER COLLECTION
                            </button>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <span className="item-price">{item.price}</span>
                                    </div>
                                    <div className="item-controls">
                                        <div className="qty-control">
                                            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                                        </div>
                                        <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total</span>
                            <span className="total-amount">€{total.toLocaleString()}</span>
                        </div>
                        <button className="checkout-btn" onClick={handleCheckout}>
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartSidebar
