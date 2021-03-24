import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
// import Axios from 'axios';
import {Router, Link} from '@reach/router';
import Main from './views/Main'
import Create from './views/Create'

function App() {
  return (
    <div className="App">
      <div className="d-flex col-6 mx-auto justify-content-around flex-wrap">
        <Link to='/'>Create Product</Link>
        <Link to='/all'>All Products</Link>
      </div>
      <Router>
        <Main path='/all'></Main>
        <Create path='/'></Create>
      </Router>
    </div>
  );
}

export default App;
