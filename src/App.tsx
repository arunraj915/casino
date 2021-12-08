import React, { lazy } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Header from './header';
import Content from './content';

function App() {
  return (

    <BrowserRouter>
    <Header />
    <Content />
  </BrowserRouter>
  );
}

export default App;
