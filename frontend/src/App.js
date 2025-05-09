import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProductList from './components/products/ProductList';
import ProductForm from './components/products/ProductForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<PrivateRoute><ProductList /></PrivateRoute>} />
          <Route path="/products/new" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
          <Route path="/products/:id/edit" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;