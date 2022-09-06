import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StoreList from './Store/StoreList.jsx';
import 'semantic-ui-css/semantic.min.css';

const app = document.getElementById('store');
ReactDOM.render(<StoreList />, app);
