import React from 'react';

const ProductList = (props) => {
    const productList = props.data.map(product => {


    return (
         <div key={product.id} className="product-img">
             <div className="product-thumb-img">
                 <img src={[product.prodimg]} />
             </div>
             <div className="text-content">
        <h1 className="title">{product.title}</h1>


        <div className="actions">
        <a className="action-icon" onClick={() => props.handleEditClick(product)}>
        edit
        </a>
        <a className="action-icon" onClick={() => props.handleDeleteClick(product)}>
            delete
        </a>
        </div>
        </div>
    </div>
    )
})
return <div className="product-list-wrapper">{productList}</div>
}

export default ProductList;
