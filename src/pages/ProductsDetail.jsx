import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductsDetail() {
  const { id } = useParams()
  var product = products.find(x => x.id == id)
  return (
    <div><h1>Details</h1>
    <h2>Product Name: {product.name}</h2>
    <h2>Unit Price: {product.unitPrice}</h2>
    <h2>Units In Stock: {product.unitsInStock}</h2>
</div>
  )
}

export default ProductsDetail