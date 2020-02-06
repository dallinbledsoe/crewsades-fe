import React, { Component } from "react"
import { Link } from 'react-router-dom';

export default class GalleryModule extends Component {

    render() {
        return (
            
            <div className="bottom-module">
                <Link to="/gallery"
                                    >
            <img src="http://www.crewsadescompany.com/wp-content/uploads/2017/01/MG_1704-400x284.jpg"
            />
                <div className="text">GALLERY</div>
                </Link>
            </div>
        )
    }
}