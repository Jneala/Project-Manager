import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
import Create from './Create'

const Main = props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }, []);

    const destroyProduct = id => {
        Axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => handleDestroyProduct(id))
            .catch(err => console.log(err))
    }
    const handleDestroyProduct = id => {
      setProducts(products.filter(product => product._id !== id));
  }

  return(
    <>
    <Create></Create>
    {/* products ?  */}
        <table className="table table-hover col-10 mx-auto">
          <thead>
            <tr>
            <th>All Products</th>  
            </tr>
            <tr>
              <th>Name</th>
              <th>Price $USD</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            products.map((p,i) => {
              return <tr key={i} >
                  <td>{p.title}</td>
                  <td>{p.price}</td>
                  <td>{p.description}</td>
                  <td>
                    <Link className="btn btn-warning" to={`/edit/${p._id}`}>Edit</Link>
                    <button 
                    className="btn btn-danger"
                    onClick={() => destroyProduct(p._id)}>Delete</button>
                    <Link to={`/show/${p._id}`} className="btn btn-success">View Product</Link>

                  </td>
              </tr>
            })
            }
          </tbody>
        </table> 
        {/* <h2>Loading...</h2> */}
        
        </>
  );
}

export default Main;