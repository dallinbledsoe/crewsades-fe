import React, { Component } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
    }
    async submit(ev) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) this.setState({complete: true})
      }
    

    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;
        return (
            <div className="checkout">
             <h1>Would you like to complete the purchase?</h1>
             <CardElement />
             <button onClick={this.submit}>Purchase</button>
            </div>

        )
    }
}

export default injectStripe(CheckoutForm)