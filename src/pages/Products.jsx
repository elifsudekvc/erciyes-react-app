import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

function Products() {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData(){
    await axios.get('https://northwind.vercel.app/api/customers').then((res) => {
      console.log("başarılı")
      setCustomer(res.data);
    });
  };

  const deleteCustomer = (id) => {
    let isDelete = window.confirm("Are you sure you want to delete");
    if (!isDelete) return;
    axios
      .delete('https://northwind.vercel.app/api/customers/' + id)
      .then((res) => {
        getData();
      });
  };

  return (
    <div>
      <div>lenght: {customers.length}</div>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Contact Title</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item) => (
            <tr>
              <td>
                <Link to={`/customers/${item.id}`}>{item.id}</Link>
              </td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td>
                <button onClick={() => deleteCustomer(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
