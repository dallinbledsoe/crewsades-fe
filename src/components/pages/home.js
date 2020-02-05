import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SliderContainer from '../front-page/slider-container'



export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            linkClass: ""
        }
    }


    handleMouseEnter() {
        this.setState({ linkClass: "image-blur" });
    }

    handleMouseLeave() {
        this.setState({ linkClass: "" });
    }


    render() {
    return (
        <div className="homepage-wrapper">
            <div className="slider">
            <SliderContainer />
            </div>
            <div className="modules">
               
                
                        <div className="mod-left"
                        >
                            
                        <Link to="/headwear" 
                        onMouseEnter={() => this.handleMouseEnter()}
                        onMouseLeave={() => this.handleMouseLeave()}
                        >
                            <div className="text">
                            SHOP HEADWEAR
                            </div>
                        
                    <img src="https://res.cloudinary.com/de1fkeds5/image/upload/v1580918135/shop-hats_mryuvu.jpg"
                            className={this.state.linkClass}
                                 
                    />
                    
                    </Link>
                                        </div>

                 
               
        
                
                    <div className="mod-right">
                        
                    <Link to="/shirts"
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseLeave={() => this.handleMouseLeave()}
                     >
                         <div className="text">
                         SHOP SHIRTS
                         </div>
                        
                    <img src="https://res.cloudinary.com/de1fkeds5/image/upload/v1580922268/_MG_0795_fr3ran.jpg"
                    className={this.state.linkClass}
                    />
                    
                    </Link>
                    </div>
                
                
                </div>
        
         </div>
    )
}
}

