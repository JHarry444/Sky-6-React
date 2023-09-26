import { useState } from "react";
import productData from "../products.json";

function FilterableProductTable() {
    const formattedProducts = {};

    for (let product of productData.products) {
        // checks if category already exists in that object
        if (formattedProducts[product.category] === undefined) {
            // assigns a new array to that category  
            formattedProducts[product.category] = [];
        }
        // adds the product to the array for its category
        formattedProducts[product.category].push(product);
    }

    console.log("formattedProducts:", formattedProducts);

    const tableData = [];

    for (let category in formattedProducts) {
        tableData.push(
            <tr>
                <th colSpan={2}>
                    {category}
                </th>
            </tr>
        );
        for (let product of formattedProducts[category]) {
            // do your search in here
            tableData.push(
                <tr>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        {'$' + product.price}
                    </td>
                </tr>
            )
        }
    }

    return (<>
        <h2>Product Table</h2>
        <input placeholder="Search..." />
        <br />
        <input type="checkbox" id="inStock" />
        <label htmlFor="inStock">Only show products in stock</label>
        <table style={{ margin: "auto" }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
    </>);
}

export default FilterableProductTable;