import React, { useState } from "react";
import { productsData } from "../data/products";

const StateProducts = () => {
  const [products, setProducts] = useState(productsData);
  const [original, setOriginal]=useState(productsData);

  const deleteProduct = (id) => {
    let isDeleted = window.confirm("silmek istediğinize emin misiniz?");
    if (isDeleted) {
      let filtered = original.filter((q) => q.id != id);
      setProducts(filtered);
    }
  };
  const stock = () => {
    console.log("Stock");
    let filtered = original.filter((q)=>q.unitsInStock<5)
    setProducts(filtered);
  };
  const showAll = () => {
    console.log("showAll");
    setProducts(productsData)
  };
  const cheap = () => {
    console.log("cheap");
    let filtered=original.filter((q)=>q.unitPrice<20)
    setProducts(filtered);
  };
  const expensive = () => {
    console.log("expensive");
    let filtered=original.filter((q)=>q.unitPrice>20)
    setProducts(filtered);
  };

  return (
    <>
      <div>
        <button onClick={() => stock()}>Show Critic Stock</button>
        <button onClick={() => showAll()}>Show All</button>
        <button onClick={() => cheap()}>Cheap</button>
        <button onClick={() => expensive()}>Expensive</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>stock</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <button onClick={() => deleteProduct(product.id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StateProducts;
