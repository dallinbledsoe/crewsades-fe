import React, { Component } from "react";
import axios from "axios";
import Product from "./product"

export default class ProductContainer extends Component {
    constructor() {
        super();

       this.products = this.products.bind(this);
       this.getProducts = this.getProducts.bind(this);
        this.state = {
            pageTitle: "Products",
            isLoading: false,
            data: [],
            theCart: []

        }
       this.handleFilter = this.handleFilter.bind(this);
       this.handleAddToCart = this.handleAddToCart.bind(this);
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


handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
        this.getProducts();
    } else {
        this.getProducts(filter)
    }
}





getProducts(filter = null) {
    axios
    .get("https://cors-anywhere.herokuapp.com/https://becksades.herokuapp.com/products")
    .then(response => {
        console.log(response)
        if (filter) {
        this.setState({
            data: response.data.filter(product => {
                return product.category === filter;
            })
    })
}
    else {
        this.setState({
            data: response.data
        })
    }
    })
    .catch(error => {
        console.log(error);
    })

}

products() {
    console.log("im here",this.state.data)
    return this.state.data.map(product => {
        return <Product key={product.id} product={product} handleAddToCart={this.handleAddToCart} />
    })
}


componentDidMount() {
    this.getProducts();
    console.log("component didmount")
}

handlePageTitleUpdate() {
    this.setState({
        pageTitle: "Something Else"
    })
}


   
render() {
    if (this.state.isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="products">
            <button onClick={() => this.handleFilter('Hoodies')}>Hoodies</button>
            <button onClick={() => this.handleFilter('Short-Sleeves')}>Short-Sleeves</button>
            <button onClick={() => this.handleFilter('Long-Sleeves')}>Long-Sleeves</button>
            <button className="btn"  onClick={() => this.handleFilter('CLEAR_FILTERS')}>All</button>
            {this.products()}
            </div>
    
    )
}

}
