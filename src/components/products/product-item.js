import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productItemClass: ""
        }
    }

    render() {
        const { id, title, price, prodimg } = this.props.item;
    return (
        <Link to={`/shirts/${id}`}>
        <div className="item-wrapper">
           
            <div className="item-image">
                <img src={prodimg}></img>
                </div>
            <div className="item-title">{title}</div>
            <div className="item-price">{price}</div>
            
            

        </div>
        </Link>
    )
    }
}