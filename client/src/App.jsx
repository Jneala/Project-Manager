import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Router, Link} from '@reach/router';
import Main from './views/Main';
// import Create from './views/Create';
import Edit from './views/Edit';
import ShowProduct from './views/ShowProduct'

function App() {
  return (
    <div className="App">
      <div className="d-flex col-6 mx-auto justify-content-around flex-wrap">
        {/* <Link to='/'>Create Product</Link> */}
        <Link to='/'>Home</Link>
      </div>
      <Router>
        <Main path='/'></Main>
        {/* <Create path='/'></Create> */}
        <Edit path='/edit/:id'></Edit>
        <ShowProduct path='/show/:id'></ShowProduct>
      </Router>
    </div>
  );
}

export default App;
