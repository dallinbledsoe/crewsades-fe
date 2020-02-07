import React, { Component } from "react"

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleCheckout = this.handleCheckout.bind(this);
    }

    getProducts() {
        axios.get("https://cors-anywhere.herokuapp.com/https://becksades.herokuapp.com/products")
        .then(response => {
            this.setState({
                products: [...response.data.filter(function(data) {
                    return data.inCart == true
                })]
                
            });})


        .catch(error => {console.log("error in get products", error);})
    }

    componentDidMount() {
        this.getProducts();
    }

    cartItems() {
        console.log("im here",this.state.data)
        return this.state.products.map(product => {
            return <CartItem key={product.id} product={product} handleAddToCart={this.handleCheckout} />
        })
    }








    render() {
        return(
            <div>

            {this.cartItems()}
            <Link><button>Back to Shirts</button></Link>
            <Link><button>Back to Headwear</button></Link>

            </div>
        )
    }
}


