import axios from 'axios';


const API_URL="http://localhost:8080";

class ProductService{


    saveProduct(product){
        return axios.post(API_URL+"/saveProduct", product);
    }

    getAllProduct(){
        return axios.get(API_URL+"/");
    }

    getProductById(id){
        return axios.get(API_URL+"/"+ id);
    }

    

    getProductByProduct(product){
        return axios.get(API_URL+"/getProductByProduct/"+ product);
    }

    deleteProduct(id){
        return axios.get(API_URL+"/deleteProduct/"+id);
    }

    editProduct(product){
        return axios.post(API_URL+"/editProduct/"+product.id, product);
    }



}

export default new ProductService();