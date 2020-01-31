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


    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError error", error)
    }

    handleNewFormSubmission(proudct) {
        this.setState ({
            products: [product].concat(this.state.products)
        })
    }

    handleEditFormSubmission() {
        this.getProducts();
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
        axios.delete(`https://db-crew-be.herokuapp.com/products/${product.id}`, { withCredentials: true }).then(response => {
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


    getProducts() {
        axios.get("http://db-crew-be.herokuapp.com/products?order_by=created_at&direction=desc", {withCredentials: true})
        .then(response => {
            this.setState({
                products: [...response.data.products]
            });})
        .catch(error => {console.log("error in get producs", error);})
    }

    componentDidMount() {
        this.getProducts();
    }
    render() {
        return (
            <div className="product-manager-wrapper">
                <div className="left-column">
                <ProductFrm
                    handleNewFormSubmission={this.handleNewFormSubmission}
                    handleEditFormSubmission={this.handleEditFormSubmission}
                    handleFormSubmissionError={this.handleFormSubmissionError}
                    clearProductToEdit={this.clearProductToEdit}
                    productToEdit={this.state.productToEdit}
                />

                </div>
                <div className="right-column">
                <ProductList handleDeleteClick={this.handleDeleteClick} data={this.state.products} handleEditClick={this.handleEditClick}/>
                
                
                </div>
            </div>
        )
    }
}