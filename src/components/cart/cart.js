import React, { Component } from "react";
import CartColumns from "./cart-columns";
import CartList from "./cart-list";
import CartTotals from "./cart-total";
import { ProductConsumer } from "./context";
import EmptyCart from "./empty-cart";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>

      </section>
    );
  }
}
