import React, { Component } from "react";
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

  // const bannerStyles = {
  //   backgroundImage: "url(" + banner_image_url + ")",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center center"
  // };

  const logoStyles = {
    width: "200px"
  };

  return (
    <div className="product-detail-wrapper">
      {/* <div className="banner" style={bannerStyles}> */}
        <img src={prodimg} style={logoStyles} />
      

      <div className="product-detail-title-wrapper">
        <div className="title">{title}</div>
        <div className="price">{price}</div>
  <div className="category">{category}</div>
      </div>

      <div className="bottom-content-wrapper">
          pooper
      </div>
    </div>
    
  );
}
}