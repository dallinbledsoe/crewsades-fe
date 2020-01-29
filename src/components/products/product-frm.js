import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

export default class ProductFrm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: "",
      category: "eCommerce",
      hat: false,
      prodimg: "",
      editMode: false,
      apiUrl: "https://db-crew-be.herokuapp.com/product",
      apiAction: "post"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleProdimgDrop = this.handleProdimgDrop.bind(this);
    this.deleteImage = this.deleteImage.bind(this);

    this.prodimgRef = React.createRef();    
  }

  deleteImage(imageType) {
    axios
      .delete(
        `https://db-crew-be.herokuapp.com/products//delete-prodimg/${this.state
          .id}?image_type=${imageType}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          [`${imageType}_url`]: ""
        });
      })
      .catch(error => {
        console.log("deleteImage error", error);
      });
  }

  componentDidUpdate() {
    if (Object.keys(this.props.productToEdit).length > 0) {
      const {
        title,
        price,
        category,
        hat,
        prodimg_url,
      } = this.props.productToEdit;

      this.props.clearProductToEdit();

      this.setState({
        id: id,
        title: title || "",
        price: price || "",
        category: category || "Hoodies",
        editMode: true,
        apiUrl: `https://db-crew-be.herokuapp.com/products/${id}`,
        apiAction: "patch",
        prodimg_url: prodimg_url || "",
      });
    }
  }

  handleThumbDrop() {
    return {
      addedfile: file => this.setState({ prodimg: file })
    };
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  }

  buildForm() {
    let formData = new FormData();

    formData.append("product[title]", this.state.tile);
    formData.append("product[price]", this.state.price);
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
      withCredentials: true
    })
      .then(response => {
        if (this.state.editMode) {
          this.props.handleEditFormSubmission();
        } else {
          this.props.handleNewFormSubmission(response.data.product_item);
        }

        this.setState({
          title: "",
          price: "",
          category: "eCommerce",
          prodimg: "",
          editMode: false,
          apiUrl: "https://db-crew-be.herokuapp.com/product",
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
    return (
      <form onSubmit={this.handleSubmit} className="product-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            title="title"
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
        </div>

        <div className="one-column">
          <textarea
            type="text"
            name="price"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>

        <div className="image-uploaders">


          {this.state.prodimg_url && this.state.editMode ? (
            <div className="product-manager-image-wrapper">
              <img src={this.state.prodimg_url} />

              <div className="image-removal-link">
                <a onClick={() => this.deleteImage("prodimg")}>Remove file</a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.prodimgRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleLogoDrop()}
            >
              <div className="dz-message">Product Img</div>
            </DropzoneComponent>
          )}
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