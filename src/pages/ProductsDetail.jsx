import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import axios from 'axios';

function ProductsDetail() {
  const [details, setdetails] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getDetails();
  });

  const { id } = useParams();

  const getDetails = () => {
    axios
      .get('https://northwind.vercel.app/api/customers/' + id)
      .then((res) => {
        setdetails(res.data);
      });
  };

  return (
    <div>
      <h1>Details</h1>
      <h2>Company Name: {details?.companyName}</h2>
      <h2>Contact Name: {details?.contactName}</h2>
      <h2>Contact Title: {details?.contactTitle}</h2>
      <h2>Address: {details?.address?.street}</h2>
      <h2>City: {details?.address?.city}</h2>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
    
  );
}

export default ProductsDetail;
