import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../cart/context"
import axios from "axios"

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inCart: false,
            count: 0,
            total: 0,
            apiUrl: "http://becksades.herokuapp.com/product/product:id",
            apiAction: "patch"
        }
    }

    handleSubmit(event) {
        axios({
          method: this.state.apiAction,
          url: this.state.apiUrl,
        })
          .then(response => {
          
              console.log(response.data)
              this.props.handleNewFormSubmission(response.data);
            this.setState({
                inCart: true,
                count: 1,
                total: price,
                apiUrl: `http://becksades.herokuapp.com/inCart/${id}`,
                apiAction: "patch",
              })
            .catch(error => {
              console.log("cartadd to handleSubmit error", error);
            });
      
          event.preventDefault();
        })
    }


    render() {
        const { id, title, price, prodimg, inCart } = this.props.product;
    return (

        <Link to={`/product/${id}`}>
        <div className="product-wrapper">
           
            <div className="item-image">
                <img src={prodimg}></img>
                </div>
            <div className="product-title">{title}</div>
            <div className="product-price">${price}.00</div>
            <button className="add-cart" onClick={this.handleSubmit}>Add to cart</button>
            
        </div>
        </Link>

    )
    }
}