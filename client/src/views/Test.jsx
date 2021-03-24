import {useState, useEffect} from 'react';
import Axios from 'axios';
import ProductForm from '../components/ProductForm';
import { navigate, Link } from '@reach/router';

const Test = props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }, []);
    const [product, setProduct] = useState({
      title: "",
      price: null,
      description: ""
    })

    const handleChange = e => {
        setProduct({
          ...product,
          [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e => {
      e.preventDefault();

      Axios.post("http://localhost:8000/api/products", product)
          .then(res => navigate('/all'))
          .catch(err => console.log(err))
    }
  return(
      <div>
          <ProductForm
              inputs={product}
              header="Create Product"
              submitValue="Create"
              handleInputChange={handleChange}
              handleSubmit={handleSubmit}
          />
      

    products ? 
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
                  <Link path='/one'><td>{p.title}</td></Link>
                  <td>{p.price}</td>
                  <td>{p.description}</td>
                  <td>

                  </td>
              </tr>
            })
            }
          </tbody>
        </table> :
        <h2>Loading...</h2>
        </div>
  );
}

export default Test;