// src/components/products/ProductForm.js
import React, { useEffect, useState } from 'react';
import { createProduct, getProduct, updateProduct } from '../../services/product.service';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProduct(id).then(res => {
        setName(res.data.name);
        setDescription(res.data.description);
        setPrice(res.data.price);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, description, price };
    id ? await updateProduct(id, data) : await createProduct(data);
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit' : 'Add'} Product</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <button type="submit">Save</button>
    </form>
  );
}