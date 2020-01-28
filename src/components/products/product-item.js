import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default function(props) {
    return (
        <Link to={`/products/${props.id}`}>
        <div className="item-wrapper">
           
            <div className="item-image">
                <img src={props.prodimg}></img>
                </div>
            <div className="item-title">{props.title}</div>
            <div className="item-price">{props.price}</div>
            
            

        </div>
        </Link>
    )
}