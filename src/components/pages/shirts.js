import React, { Component } from "react";
import axios from "axios"
import Product from "../products/product"
import ProductContainer from "../products/product-container";






export default class Shirts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            theCart: []
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    
    
    getProducts() {
        axios.get("https://cors-anywhere.herokuapp.com/https://becksades.herokuapp.com/products")
        .then(response => {
            this.setState({
                products: [...response.data.filter(function(data) {
                    return data.hat == false
                })]
                
            });})


        .catch(error => {console.log("error in get products", error);})
    }

    componentDidMount() {
        this.getProducts();
    }

    products() {
        console.log("im here",this.state.data)
        return this.state.products.map(product => {
            return <Product key={product.id} product={product} handleAddToCart={this.handleAddToCart} />
        })
    }

    handleAddToCart(id) {
        axios.patch(`https://becksades.herokuapp.com/inCart/${id}`,{
            inCart: true,
            count: 1,
        }).then
        const newCart = this.state.theCart.concat(id)
        this.setState({
            theCart: newCart

        })
    }


render() {
    return(
        <div className="products-wrapper">
             {this.products()}
        </div>
    )
}
}