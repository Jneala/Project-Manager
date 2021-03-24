import {useState, useEffect} from 'react';
import Axios from 'axios';

const ShowProduct = props => {
    const [product,setProduct] = useState(false);

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/products/${props.id}`)
      .then(res => setProduct(res.data.results[0]))
      .catch(err => console.log(err))
    }, [props])

    return(

      product ?
      <div className="card col-6 mx-auto">
        <div className="card-body">
          <div className="card-title">
            <h2>{product.title}</h2>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div> :
      <h2>Loading...</h2>
    )

}

export default ShowProduct;