import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SaleList from './Sales/SaleList.jsx';
import 'semantic-ui-css/semantic.min.css';

const app = document.getElementById('sale');
ReactDOM.render(<SaleList />, app);
