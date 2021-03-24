const ProductForm = props => {
    const {inputs, handleInputChange, handleSubmit, header, submitValue} = props;

    return(
      <form onSubmit={handleSubmit} className="col-8 mx-auto">
        <h2 className="text-center">{header}</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
          type="text" 
          name="title" 
          className="form-control"
          onChange={handleInputChange}
          value={inputs.title}
          />
          <span className="text-danger"></span>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input 
          type="number" 
          name="price" 
          className="form-control"
          onChange={handleInputChange}
          value={inputs.price}
          />
          <span className="text-danger"></span>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input 
          type="text" 
          name="description" 
          className="form-control"
          onChange={handleInputChange}
          value={inputs.description}
          />
          <span className="text-danger"></span>
        </div>
        <input type="submit" value={submitValue} className="btn btn-primary"/>
      </form>
    )
}

export default ProductForm;
