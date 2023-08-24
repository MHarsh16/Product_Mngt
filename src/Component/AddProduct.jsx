import React, { useState } from 'react'
import ProductService from '../Service/ProductService';



const AddProduct = () => {

    const[product,setProduct]=useState({
        productName:"",
        brandName:"",
        price:"",
        warehouse:"",
        section:"",

    });

    const [msg,setMsg]=useState("");

    const handleChange=(e)=>{
        const value=e.target.value;
        setProduct({...product,[e.target.name]: value});

    };

    const ProductRegister=(e) => {
        e.preventDefault();
        

        ProductService
        .saveProduct(product)
        .then((res) => {
            console.log("Product Added Successfully");
            setMsg("Product Added Successfully");
            
            setProduct({
                product:"",
                brand:"",
                price:"",
                warehouse:"",
                section:"",
        
            });

        }).catch((error) => {
            console.log(error);
        });
    };


  return (
    <>
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header fs-3 text-center bg-success text-light'>
                        Add Product

                    </div>
                    {msg && <p className='fs-4 text-center text-success'> {msg} </p>}
                    <div className='card-body'>
                        <form onSubmit={(e) => ProductRegister(e)}>
                            <div className='mb-3'>
                                <label > Enter Product Name </label>
                                <input type="text" name="product" className="form-control" 
                                onChange={(e)=>handleChange(e)}
                                value={product.product}
                                />
                            </div>

                            <div className='mb-3'>
                                <label > Enter Brand Name </label>
                                <input type="text" name="brand" className="form-control" 
                                onChange={(e)=>handleChange(e)}
                                value={product.brand}
                                />
                            </div>

                            <div className='mb-3'>
                                <label > Enter Price </label>
                                <input type="text" name="price" className="form-control" 
                                onChange={(e)=>handleChange(e)}
                                value={product.price}
                                />
                            </div>

                            <div className='mb-3'>
                                <label > Enter Warehouse </label>
                                <input type="text" name="warehouse" className="form-control"
                                onChange={(e)=>handleChange(e)}
                                value={product.warehouse}
                               />
                            </div>

                            <div className='mb-3'>
                                <label > Enter Section </label>
                                <input type="text" name="section" className="form-control" 
                                onChange={(e)=>handleChange(e)}
                                value={product.section}
                                />
                            </div>
                            <button className='btn btn-success col-md-12'>
                                <h4>Add</h4></button>
                                

                        </form>
                        
                    </div>
                   
                   
                </div>

            </div>
        </div>

    </div>
        
    </>
  )
}

export default AddProduct