import React from "react";
import { NavLink } from "react-router-dom";
export default function() {



return (
    <div className="module-wrapper">
        module wrapper
        <NavLink to="/shirts">
            <div className="image-container" backgroundcolor="https://res.cloudinary.com/de1fkeds5/image/upload/v1580918135/shop-hats_mryuvu.jpg">
                Shop Shirts
                </div>
        </NavLink>

    </div>
)
}