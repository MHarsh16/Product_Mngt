import React, { useEffect, useState } from 'react';
import ProductService from '../Service/ProductService';
import { Link } from 'react-router-dom';

const Home = () => {
    const [productList, setProductList] = useState([]);
    const [msg, setMsg] = useState("");

    
    useEffect(() => {
        init();
        
    },[]);

    const init=() => {
        ProductService
        .getAllProduct()
        .then((res) => {
            setProductList(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    
    const deleteProduct=(id)=>{
        ProductService
        .deleteProduct(id)
        .then((res) => {
            setMsg("Deleted Successfully");
            init();
        })
        .catch((error)=>{
            console.log(error);
        });
    };
  
  
  
    return (
    <>
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='card'>
                    <div className="card-header fs-3 text-center bg-success text-light">
                        All Product List
                    </div>
                         {msg && <p className='fs-4 text-center text-success '> {msg} </p>}
                    <div className='card-body'>
                      <table class="table">
                        <thead>
                            <tr>
                              <th scope="col">Sl No.</th>
                              <th scope="col">Product</th>
                              <th scope="col">Brand</th>
                              <th scope="col">Price</th>
                              <th scope="col">Warehouse</th>
                              <th scope="col">Section</th>
                              <th scope="col">Action</th>     
                           </tr>
                        </thead>
                        <tbody>
                            {
                                productList.map((p,num) =>(
                        
                                <tr>
                                    <td>{num+1}</td>
                                    <td>{p.product}</td>
                                    <td>{p.brand}</td>
                                    <td>{p.price}</td>
                                    <td>{p.warehouse}</td>
                                    <td>{p.section}</td>
                                    <td>
                                        <Link to={'editProduct/'+p.id} className="btn btn-sm btn-success ">Edit</Link>
                                        <button onClick={() => deleteProduct(p.id)} className="btn btn-sm btn-danger ms-1">
                                          <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
      
                                </tr> 
                            ))} 
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </div>
    </div>       
    </>
  )
}

export default Home