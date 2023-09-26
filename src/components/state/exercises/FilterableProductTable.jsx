import { useState } from "react";
import productData from "../products.json";

function FilterableProductTable() {
    const [search, setSearch] = useState("");
    const [inStock, setInStock] = useState(false);

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
            <tr key={category + "-heading"}>
                <th colSpan={2}>
                    {category}
                </th>
            </tr>
        );
        for (let product of formattedProducts[category]) {
            // debugger;
            if (!product.name.toLowerCase().includes(search) || (inStock && !product.stock)) continue;
            tableData.push(
                <tr key={product.id}>
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
        <input placeholder="Search..." checked={search} onChange={e => setSearch(e.target.value)} />
        <br />
        <input type="checkbox" id="inStock" checked={inStock} onChange={e => setInStock(e.target.checked)} />
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