import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-success">
           <div class="container-fluid">
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page" href="#">
                                <i class="fa-solid fa-house-user me-1"></i>
                                    Home</Link>
                            </li>
                            <li class="nav-item" >
                                <Link to="addProduct"  class="nav-link active " aria-current="page" href="#">
                                <i class="fa-solid fa-pen me-1"></i>
                                Add Product</Link>
                            </li>   
                       </ul>
                      
     
                   </div>
             </div>
      </nav>  
        
    )
}

export default Navbar