import React from 'react';
import Button from '../../../components/ui/Button';
import './Orders.css';

const mockOrders = [
    {
        id: '#ORD-7723',
        date: 'Oct 24, 2025',
        status: 'Delivered',
        total: '$1,299.00',
        items: ['Luxury Silk Scarf', 'Gold Plated Cufflinks']
    },
    {
        id: '#ORD-7722',
        date: 'Sep 12, 2025',
        status: 'Processing',
        total: '$4,500.00',
        items: ['Diamond Stud Earrings']
    },
    {
        id: '#ORD-7721',
        date: 'Aug 05, 2025',
        status: 'Delivered',
        total: '$850.00',
        items: ['Leather Travel Bag']
    },
    {
        id: '#ORD-7720',
        date: 'Jul 15, 2025',
        status: 'Cancelled',
        total: '$2,100.00',
        items: ['Velvet Evening Gown']
    }
];

const Orders = () => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return 'text-green-400 bg-green-400/10';
            case 'Processing': return 'text-yellow-400 bg-yellow-400/10';
            case 'Cancelled': return 'text-red-400 bg-red-400/10';
            default: return 'text-gray-400 bg-gray-400/10';
        }
    };

    return (
        <div className="orders-section">
            <header className="section-header">
                <h2 className="section-title">Order History</h2>
                <p className="section-subtitle">View and track your recent purchases</p>
            </header>

            <div className="orders-list">
                {mockOrders.map((order) => (
                    <div key={order.id} className="order-card glass-panel">
                        <div className="order-header">
                            <div className="order-id-date">
                                <span className="order-id">{order.id}</span>
                                <span className="order-date">{order.date}</span>
                            </div>
                            <span className={`order-status ${getStatusColor(order.status)}`}>
                                {order.status}
                            </span>
                        </div>

                        <div className="order-items">
                            {order.items.join(', ')}
                        </div>

                        <div className="order-footer">
                            <span className="order-total">{order.total}</span>
                            <Button variant="outline" style={{ fontSize: '0.7rem', padding: '0.5rem 1rem' }}>
                                View Details
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
