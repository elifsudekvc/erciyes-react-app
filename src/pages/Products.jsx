import React from 'react'
import { Link } from 'react-router-dom'
import {products} from '../data/products'

function Products() {
  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>UNİT PRİCE</th>
          <th>STOCK</th>
        </thead>
        <tbody>
        {products.map((item) => (
            <tr key={item.id}>
              <td><Link to={`/products/${item.id}`}>{item.id}</Link></td>
              <td><Link to={`/products/${item.id}`}>{item.name}</Link></td>
              <td><Link to={`/products/${item.id}`}>{item.unitPrice}</Link></td>
              <td><Link to={`/products/${item.id}`}>{item.unitsInStock}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products