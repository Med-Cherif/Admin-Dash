import React from 'react'

const Order = (props: any) => {
    return (
        <div className='order'>
            <p className='order-id'>#{props['order ID']}</p>
            <div className='product'>
                <img src={props.product.image} alt="" className='product-image' />
                <span className="product-name">{props.product.name}</span>
            </div>

            <p className='customer'>{props.customer}</p>
            <p className='data'>{props.date}</p>
            <p className='price'>{props.price}$</p>

            <p className={`status ${props.status}`}>{props.status}</p>
            
        </div>
    )
}

export default Order