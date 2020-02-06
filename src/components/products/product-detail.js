import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";




export default class ProductDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
    product: {}
    };
  }



componentWillMount() {
  this.getProduct();
}

getProduct() {
  axios
    .get(
      `https://becksades.herokuapp.com/product/${
        this.props.match.params.id
      }`,
    )
    .then(response => {
      this.setState({
        product: response.data
      });
    })
    .catch(error => {
      console.log("getproduct error", error);
    });
}

render() {
  const {
    prodimg,
    title,
    price,
    category
  } = this.state.product;

  const logoStyles = {
    width: "30%"
  };

  return (
    <div className="product-detail-wrapper">
        <img src={prodimg} style={logoStyles} />

      

      <div className="product-detail-title-wrapper">
        <div className="title">{title}</div>
        <div className="price">${price}.00</div>
      </div>

      <div className="bottom-content-wrapper">
        <button onClick={() => this.props.handleAddToCart(title)}>Add to cart</button>
        <Link to="/shirts">
        <button>Back to shirts</button>
        </Link>
      </div>
    </div>
    
  );
}
}