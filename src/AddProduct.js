import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function AddProduct() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file_path, setFilepath] = useState("");

  async function AddProduct()
  {
    console.log(name,file_path,description,price);
    const formData = new FormData();
    formData.append('file_path',file_path);
    formData.append('name',name);
    formData.append('price',price);
    formData.append('description',description);
    let result = await fetch("http://localhost/ecom-reatc/ecom-backend/server.php/api/addproduct", {
      method: 'POST',
    
      body: formData
    });
    alert("Data saved");
  }

  return (
    <>
     
      <div className="col-sm-6 offset-sm-3">
        <h1>Add Product</h1>
       
        <br />

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Product Name" />
        <br />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Description" />
        <br />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Product Price" />
        <br />
        <input type="file"  onChange={(e) => setFilepath(e.target.files[0])} className="form-control" />
        <br />
        <button onClick={AddProduct} className="btn btn-primary">Add</button>

      </div>
    </>
  );
}

export default AddProduct;