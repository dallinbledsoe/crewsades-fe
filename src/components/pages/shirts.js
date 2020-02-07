import React, { Component } from "react";
import axios from "axios"
import Product from "../products/product"
import ProductContainer from "../products/product-container";






export default class Shirts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }
    
    
    getProducts() {
        axios.get("https://cors-anywhere.herokuapp.com/https://becksades.herokuapp.com/products")
        .then(response => {
            this.setState({
                products: [...response.data]
                
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

render() {
    return(
        <div className="products-wrapper">
             {this.products()}
        </div>
    )
}
}