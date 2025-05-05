import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
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
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/products" component={ProductList} />
          <PrivateRoute exact path="/products/new" component={ProductForm} />
          <PrivateRoute exact path="/products/:id/edit" component={ProductForm} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;