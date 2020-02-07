import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SliderContainer from '../front-page/slider-container'
import GalleryModule from '../front-page/gallery-module'



export default class Home extends Component {
    


    render() {
    return (
        <div className="homepage-wrapper">
            
            <div className="modules">
               
                
                        <div className="mod-left"
                        >
                            
                        <Link to="/headwear" 

                        >
                            <div className="text">
                            SHOP HEADWEAR
                            </div>
                        
                    <img src="https://res.cloudinary.com/de1fkeds5/image/upload/v1580918135/shop-hats_mryuvu.jpg"
                            
                                 
                    />
                    
                    </Link>
                                        </div>

                 
               
        
                
                    <div className="mod-right">
                        
                    <Link to="/shirts">
                         <div className="text">
                         SHOP SHIRTS
                         </div>
                        
                    <img src="https://res.cloudinary.com/de1fkeds5/image/upload/v1580922268/_MG_0795_fr3ran.jpg"
                    />
                    
                    </Link>
                    </div>
                
                
                </div>
                <GalleryModule />
                <div className="slider">
            <SliderContainer />
            </div>
         </div>
    )
}
}


