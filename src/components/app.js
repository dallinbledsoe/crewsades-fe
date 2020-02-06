import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import axios from "axios";
import Shirts from "./pages/shirts";
import Headwear from "./pages/headwear";
import Gallery from "./pages/gallery";
import ProductDetail from "./products/product-detail";
import ProductManager from "./pages/product-manager";
import Cart from "./cart/cart"
import Checkout from "./cart/checkout";
import CheckoutForm from "./cart/form";
import Auth from "./pages/auth";
import NoMatch from "./pages/nomatch"



export default class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }
  
  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }
  
  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
     .then(response => {
       const loggedIn = response.data.logged_in;
       const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
  });
}

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [<Route key="product-manager" path="/product-manager" component={ProductManager} />];

  }


  render() {
    return (
      <div className='app'>
        <Router>
          <div>
        <NavigationContainer
         loggedInStatus={this.state.loggedInStatus} 
         handleSuccessfulLogout={this.handleSuccessfulLogout}
          />
        {/* <Cart /> */}

        {/* <CheckoutForm /> */}


            <Switch>
              <Route exact path="/" component={Home} />
              <Route 
              path="/auth" 
              render={props => (
                <Auth
                {...props}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
              )}
               />
              <Route path="/gallery" component={Gallery} />
              <Route path="/shirts" component={Shirts} />
              <Route path="/headwear" component={Headwear} />
              <Route path="/product/product:id" component={ProductDetail} />
              {this.state.loggedInStatus === "LOGGED_IN" ? (
                this.authorizedPages()
              ) : null}
              <Route path="/cart" component={Cart} />
              <Route component={NoMatch} />
              
            </Switch>
</div>
        </Router>

      
      </div>
    );
  }
}
