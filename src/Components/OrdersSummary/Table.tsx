import React from 'react'
import Order from './Order';

const image = require('../../Assets/product.png')

export const data = [
    { "order ID": "486256", product: { image, name: "Light blue chair" }, customer: 'Mohamed Cherif', date: '20 Mai 2022', price: 29.99, status: 'in Progress' },
    { "order ID": "486256", product: { image, name: "Light blue chair" }, customer: 'Mohamed Cherif', date: '20 Mai 2022', price: 29.99, status: 'Completed' },
    { "order ID": "486256", product: { image, name: "Light blue chair" }, customer: 'Mohamed Cherif', date: '20 Mai 2022', price: 29.99, status: 'Canceled' },
    { "order ID": "486256", product: { image, name: "Light blue chair" }, customer: 'Mohamed Cherif', date: '20 Mai 2022', price: 29.99, status: 'in Progress' },
    { "order ID": "486256", product: { image, name: "Light blue chair" }, customer: 'Mohamed Cherif', date: '20 Mai 2022', price: 29.99, status: 'Completed' },
]

const Table = () => {
    return (
        <div className="orders-summary-table">
            {data.map((order, i) => (
                <Order key={i} {...order} />
            ))}
        </div>
    )
}

export default Table