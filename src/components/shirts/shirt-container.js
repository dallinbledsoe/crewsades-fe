import React, { Component } from "react";
import axios from "axios";
import ShirtItem from "./shirt-item"

export default class ShirtContainer extends Component {
    constructor() {
        super();


        this.getShirtItems = this.getShirtItems.bind(this);
        this.state = {
            pageTitle: "Shirts",
            isLoading: false,
            data: [
                {title: "Crewsades Logo Fleece Hoodie", category: "Hoodies", slug: ' ' },
                {title: "Baby Blue Embroidered Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "Black Embroidered Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "No. 3 Black Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "No. 3 Red Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "No. 3 White Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "Enlighten Painting Long Sleeve Shirt", category: "Long-Sleeves", slug: ' ' },
                {title: "Enlighten B&W Painting Long Sleeve Shirt", category: "Long-Sleeves", slug: ' ' }
            ]}
        this.handleFilter = this.handleFilter.bind(this);
    }

        
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }
 
    getShirtItems() {
        axios
        .get("http://localhost:5000/shirts")
        .then(response => {
            console.log("response data", response);
            this.setState({
                data: response.data.shirt_items
        })
       
        })
        .catch(error => {
            console.log(error);
        })

    }

    shirtItems() {
        return this.state.data.map(item => {
            return <ShirtItem key={item.id} item={item} />
        })
    }

    componentDidMount() {
        this.getShirtItems();
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
            <div>
                <button onClick={() => this.handleFilter('Hoodies')}>Hoodies</button>
                <button onClick={() => this.handleFilter('Short-Sleeves')}>Short-Sleeves</button>
                <button onClick={() => this.handleFilter('Long-Sleeves')}>Long-Sleeves</button>
                {this.shirtItems()}
                </div>
        
        )
    }

}