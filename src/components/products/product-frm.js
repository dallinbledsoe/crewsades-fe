import React, { Component } from "react";
import axios from "axios";


export default class ProductFrm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: 0,
      description: "",
      category: "Hoodies",
      hat: false,
      prodimg: "",
      inCart: false,
      count: 0,
      total: 0,
      editMode: false,
      apiUrl: "https://cors-anywhere.herokuapp.com/http://becksades.herokuapp.com/product",
      apiAction: "post"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.prodimgRef = React.createRef();    
  }


  componentDidUpdate() {
    if (Object.keys(this.props.productToEdit).length > 0) {
      const {
        id,
        title,
        price,
        description,
        category,
        prodimg,
        inCart,
        count,
        total

      } = this.props.productToEdit;

      this.props.clearProductToEdit();

      this.setState({
        id: id,
        title: title || "",
        price: price || 0,
        description: description || "",
        category: category || "Hoodies",
        hat: hat || false,
        inCart: inCart || false,
        count: count || 0,
        total: total || 0,
        editMode: true,
        apiUrl: `http://becksades.herokuapp.com/product/${id}`,
        apiAction: "patch",
        prodimg: prodimg || "",
      });
    }
  }

  buildForm() {
    let formData = new FormData();

    formData.append("product[title]", this.state.title);
    formData.append("product[price]", this.state.price);
    formData.append("product[description]", this.state.description);
    formData.append("product[hat]", this.state.hat);
    formData.append("product[inCart]", this.state.inCart);
    formData.append("product[count]", this.state.count);
    formData.append("product[total]", this.state.total);
    formData.append("product[category]", this.state.category);

    if (this.state.prodimg) {
      formData.append("product[prodimg]", this.state.prodimg);
    }

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm(),
    })
      .then(response => {
        if (this.state.editMode) {
          this.props.handleEditFormSubmission();
        } else {
          console.log(response.data)
          this.props.handleNewFormSubmission(response.data);
        }

        this.setState({
          title: "",
          price: 0,
          description: "",
          category: "Hoodies",
          hat: false,
          prodimg: "",
          inCart: false,
          count: 0,
          total: 0,
          editMode: false,
          apiUrl: "https://cors-anywhere.herokuapp.com/http://becksades.herokuapp.com/product",
          apiAction: "post"
        });

        [this.prodimgRef].forEach(ref => {
          ref.current.dropzone.removeAllFiles();
        });
      })
      .catch(error => {
        console.log("product form handleSubmit error", error);
      });

    event.preventDefault();
  }

  render() {
    console.log(this.state.title)
    return (
      <form onSubmit={this.handleSubmit} className="product-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value="Hoodies">Hoodies</option>
            <option value="Long-Sleeves">Long-Sleeves</option>
            <option value="Short-Sleeves">Short-Sleeves</option>
          </select>
          <select
            name="inCart"
            value={this.state.inCart}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value={false}>false</option>
          </select>
          <select
            name="count"
            value={this.state.count}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value={0}>0</option>
          </select>
          <select
            name="total"
            value={this.state.total}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value={0}>0</option>
          </select>
          <select
            name="hat"
            value={this.state.hat}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
        </div>

        <div className="one-column">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handleChange}
          />
            <input
            type="text"
            name="prodimg"
            placeholder="Prodimg link"
            value={this.state.prodimg}
            onChange={this.handleChange}
          />
          <textarea
          type="text"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleChange}
          />
        </div>

        <div className="image-uploaders">

          
        </div>

        <div>
          <button className="btn" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}