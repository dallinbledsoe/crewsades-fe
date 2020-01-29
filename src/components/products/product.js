import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productClass: ""
        }
    }

    render() {
        const { id, title, price, prodimg_url } = this.props.product;
    return (
        <Link to={`/shirts/${id}`}>
        <div className="product-wrapper">
           
            <div className="item-image">
                <img src={prodimg_url}></img>
                </div>
            <div className="product-title">{title}</div>
            <div className="product-price">{price}</div>
            
        </div>
        </Link>
    )
    }
}