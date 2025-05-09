import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductService from '../../services/product.service';
import { Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ProductService.getAll()
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleDelete = (id) => {
    ProductService.remove(id)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <Container>
      <Box mt={3} mb={3}>
        <Typography variant="h4">Products</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/products/new')}
        >
          Add Product
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <ProductItem 
                key={product.id} 
                product={product} 
                onDelete={handleDelete} 
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProductList;