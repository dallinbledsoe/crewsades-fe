import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import CartItem from "./cart-item"

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: []
        }
        this.getCartItems = this.getCartItems.bind(this)
        // this.handleCheckout = this.handleCheckout.bind(this);
    }

    getCartItems() {
        axios.get("https://cors-anywhere.herokuapp.com/https://becksades.herokuapp.com/products")
        .then(response => {
            this.setState({
                cartItems: [...response.data.filter(function(data) {
                    return data.inCart == true
                })]
                
            });})


        .catch(error => {console.log("error in get products", error);})
    }

    componentDidMount() {
        this.getCartItems();
    }

    cartItems() {
        console.log("im here",this.state.data)
        return this.state.cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} cartItem={cartItem} handleCheckout={this.handleCheckout} />
        })
    }

    // handleCheckout() {

    // }






    render() {
        return(
            <div>

            {this.cartItems()}
            <Link to="/checkout"><button>Checkout</button></Link>
            <Link to="/shirts"><button>Back to Shirts</button></Link>
            <Link to="/headwear"><button>Back to Headwear</button></Link>

            </div>
        )
    }
}


