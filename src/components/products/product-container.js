import React, { Component } from "react";
import axios from "axios";
import ProductItem from "./product-item"

export default class ProductContainer extends Component {
    constructor() {
        super();


       // this.getProductItems = this.getProductItems.bind(this);
        this.state = {
            pageTitle: "Products",
            isLoading: false,
            data: [
                {id: "1", title: "Crewsades Logo Fleece Hoodie", type: "shirt", category: "Hoodies", price: "$30.00", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717305/shirts/background_ku8tcz.jpg", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {id: "2", title: "Baby Blue Embroidered Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579735038/shirts/BLUE-FRONT-FINSIHED_olwwlg.jpg", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {id: "3", title: "Black Embroidered Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579735033/shirts/BLACK-FRONT-FINSHED-embroidered-boy_k3eacr.jpg", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {id: "4", title: "No. 3 Black Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717308/shirts/BLACK-SHIRT-FINISHED_emqaca.jpg", pmg2: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717307/shirts/BLACK-FRONT-FINSHED_trynz6.jpg", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {id: "5", title: "No. 3 Red Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717377/shirts/Red-Shirt-BACK-FINISHED_ubuzbf.jpg", pmg2: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717376/shirts/Red-FRont-finished_fryped.jpg", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {id: "6", title: "No. 3 White Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717383/shirts/WHITE-SHIRT-FINISHED_g3axgj.jpg", pmg2: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717383/shirts/WHITE-FRONT-FINSIHED_kx1ce1.jpg", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {id: "7", title: "Enlighten Painting Long Sleeve Shirt", type: "shirt", category: "Long-Sleeves", price: "$29.95", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717370/shirts/long-sleeve-enlighten_e5ftvy.jpg", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {id: "8", title: "Enlighten B&W Painting Long Sleeve Shirt", type: "shirt", category: "Long-Sleeves", price: "$29.95", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717308/shirts/black-longsleeve-enlighten_ai4k16.jpg", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {id: "9", title: "Khaki 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717370/hats/KHAKI-DOOD-FINSIHED_hkdkhj.jpg", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: '' },
                {id: "10", title: "Olive Green 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717369/hats/finsihsed-green-hat-4-web_bltcqu.jpg", quantity: '1', slug: '' },
                {id: "11", title: "Red 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717376/hats/RED-five_wflhvh.jpg", quantity: '1', slug: '' },
                {id: "12", title: "Black 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717307/hats/BLACK-FIVE-FINSHED-4-web_rluddz.jpg", quantity: '1', slug: '' },
                {id: "13", title: "Navy Blue 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717309/hats/BLUE-FIVE_ydgccq.jpg", quantity: '1', slug: '' },
                {id: "14", title: "Gray 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717369/hats/Grey-5-panel_ddw1gd.jpg", quantity: '1', slug: '' },
                {id: "15", title: "Navy-Blue Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717308/hats/BLUE-DAD-HAT-FFFFFFF_inrafy.jpg", quantity: '1', slug: '' },
                {id: "16", title: "White Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717383/hats/WHITE-DAD_fjbidb.jpg", quantity: '1', slug: '' },
                {id: "17", title: "Spruce-Green Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579734997/hats/SPRUCE-GREEN_rzgmmx.jpg", quantity: '1', slug: '' },
                {id: "18", title: "Pink Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579734989/hats/PINK-DAD_yk2xp2.jpg", quantity: '1', slug: '' },
                {id: "19", title: "Black Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "https://res.cloudinary.com/de1fkeds5/image/upload/v1579717307/hats/BLACK-HAT-FINISHED-4-web_pw96ql.jpg", quantity: '1', slug: '' },
            ]}
       // this.handleFilter = this.handleFilter.bind(this);
    }

        





productItems() {
    return this.state.data.map(item => {
        return <ProductItem title={item.title} url={" "} slug={item.slug} category={item.category} price={item.price} prodimg={item.prodimg} size={item.size} quantity={item.quantity} />
    })
}

handlePageTitleUpdate() {
    this.setState({
        pageTitle: "Something Else"
    })
}


   
render() {
    if (this.state.isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="products">
            {/* <button onClick={() => this.handleFilter('Dad-Cap')}>Dad-Caps</button>
            <button onClick={() => this.handleFilter('5-Panel')}>5-Panels</button> */}
            {this.productItems()}
            </div>
    
    )
}

}








// handleFilter(filter) {
//     this.setState({
//         data: this.state.data.filter(item => {
//             return item.category === filter;
//         })
//     })
// }

// getProductItems() {
//     axios
//     .get("http://localhost:5000/products")
//     .then(response => {
//         console.log("response data", response);
//         this.setState({
//             data: response.data.product_items
//     })
   
//     })
//     .catch(error => {
//         console.log(error);
//     })

// }

// productItems() {
//     return this.state.data.map(item => {
//         return <ProductItem key={item.id} item={item} />
//     })
// }

// componentDidMount() {
//     this.getProductItems();
// }

// handlePageTitleUpdate() {
//     this.setState({
//         pageTitle: "Something Else"
//     })
// }


   
// render() {
//     if (this.state.isLoading) {
//         return <div>Loading...</div>
//     }

//     return (
//         <div>
//             <button onClick={() => this.handleFilter('Hoodies')}>Hoodies</button>
//             <button onClick={() => this.handleFilter('Short-Sleeves')}>Short-Sleeves</button>
//             <button onClick={() => this.handleFilter('Long-Sleeves')}>Long-Sleeves</button>
//             {this.productItems()}
//             </div>
    
//     )
// }

// }
