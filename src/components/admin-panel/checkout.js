import * as React from 'react';
import CheckoutForm from "../cart/form"
import { StripeProvider, Elements } from 'react-stripe-elements'
// import CheckoutForm from "../cart/form"

export default class Checkout extends React.Component {

    render() {
        return (
            <div>



            <StripeProvider apiKey="pk_test_DZQdOlPEToyFbbjaHjUht9q4">
            <Elements>
                <CheckoutForm />

            </Elements>

            </StripeProvider>
            </div>
        )
    }
}