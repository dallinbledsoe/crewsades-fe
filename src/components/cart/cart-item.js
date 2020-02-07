// remove from cart
// item
// price
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

export default class CartItem extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        const { id, title, price, prodimg } = this.props.cartItem;
    return (


        <div className="cartitem-wrapper">
            <div className="item-image">
                <img src={prodimg}></img>
                </div>
            <div className="cartitem-title">{title}</div>
            <div className="cartitem-price">${price}.00</div>
            <div className="quanitity">


            </div>
            <div className="size">


            </div>
            <button className="add-cart" onClick={() => this.props.handleRemove(id)}>Remove from Cart</button>
            </div>

            
       
        

    )
    }
}