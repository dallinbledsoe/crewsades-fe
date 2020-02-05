import React, { Component } from "react"
import { NavLink } from "react-router-dom";

    


export default class ShopHats extends Component {


    render() {
return (
    <div className="module-wrapper">
        <NavLink to="/headwear">
            <img src="https://res.cloudinary.com/de1fkeds5/image/upload/v1580863047/shop-hats_mryuvu.jpg" />
                Shop Hats
            
        </NavLink>

    </div>
)
}
}