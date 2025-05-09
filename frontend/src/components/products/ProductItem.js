import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product, onDelete }) => {
  const navigate = useNavigate();

  return (
    <TableRow>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>
        <Button onClick={() => navigate(`/products/${product.id}/edit`)} color="primary">
          Edit
        </Button>
        <Button onClick={() => onDelete(product.id)} color="secondary">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ProductItem;
