import React from "react";
import './style.css';

function ListRenderingExample() {

    // const names = ["Mohamed", "Rashed", "Hassna", "Amin", "Eslam"]
    const products =[
        {
            id: 1,
            name: "Product 1",
            price: 100,
            category: "Clothes"
        },
        {
            id: 2,
            name: "Product 2",
            price: 600,
            category: "T-shirt"
        },
        {
            id: 3,
            name: "Product 3",
            price: 450,
            category: "Sports"
        },
        {
            id: 4,
            name: "Product 4",
            price: 25000,
            category: "Phones"
        },
        {
            id: 5,
            name: "Product 5",
            price: 35000,
            category: "Labtops"
        }
    ]

    return(
        <div>
            {products.map((product) => (
                <div className="Card" key={product.id}>
                    <h1>{product.name}</h1>
                    <p>Product price: {product.price}</p>
                    <span>Category: {product.category}</span>
                </div>
            ))}
        </div>
    )
}

export default ListRenderingExample;