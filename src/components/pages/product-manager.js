import React, { Component } from 'react';
import axios from "axios";
import ProductList from '../products/product-list';
import ProductFrm from "../products/product-frm";


export default class ProductManager extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
            productToEdit: {}
        }
        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearProductToEdit = this.clearProductToEdit.bind(this);
    }

    clearProductToEdit() {
        this.setState({
            productToEdit: {}
        })
    }

    handleEditClick(product) {
        this.setState ({
            productToEdit: product
        })
    }

    handleDeleteClick(product) {
        axios.delete(`https://cors-anywhere.herokuapp.com/https://becksades.herokuapp.com/product/${product.id}`).then(response => {
            this.setState({
                products: this.state.products.filter(product => {
                    return product.id !== product.id;
                })
            })

            return response.data;
        })
        .catch(error => {
            console.log("handleclickdelete error", error)
        })
    }


    handleEditFormSubmission() {
        this.getProducts();
    }

    handleNewFormSubmission(product) {
        this.setState ({
            products: [product].concat(this.state.products)
        })
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError error", error)
    }






    getProducts() {
        axios.get("https://cors-anywhere.herokuapp.com/https://becksades.herokuapp.com/products")
        .then(response => {
            this.setState({
                products: [...response.data]
            });})
        .catch(error => {console.log("error in get producs", error);})
    }

    componentDidMount() {
        this.getProducts();
    }
    render() {
        return (
            <div className="product-manager-wrapper">

                <div className="right-column">
                <ProductList handleDeleteClick={this.handleDeleteClick} data={this.state.products} handleEditClick={this.handleEditClick}/>
                
                
                </div>
                <div className="left-column">
                <ProductFrm
                    handleNewFormSubmission={this.handleNewFormSubmission}
                    handleEditFormSubmission={this.handleEditFormSubmission}
                    handleFormSubmissionError={this.handleFormSubmissionError}
                    clearProductToEdit={this.clearProductToEdit}
                    productToEdit={this.state.productToEdit}
                />

                </div>
            </div>
        )
    }
}