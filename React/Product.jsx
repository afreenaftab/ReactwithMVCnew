import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductList from './Product/ProductList.jsx';
import 'semantic-ui-css/semantic.min.css';

const app = document.getElementById('product');
ReactDOM.render(<ProductList />, app);

