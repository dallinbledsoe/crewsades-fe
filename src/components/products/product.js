import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { id, title, price, prodimg } = this.props.product;
    return (
        <Link to={`/products/${id}`}>
        <div className="product-wrapper">
           
            <div className="item-image">
                <img src={prodimg}></img>
                </div>
            <div className="product-title">{title}</div>
            <div className="product-price">${price}.00</div>
            <button className="add-cart">Add to cart</button>
            
        </div>
        </Link>
    )
    }
}