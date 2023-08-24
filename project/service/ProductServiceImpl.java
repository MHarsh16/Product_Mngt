package com.project.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.model.Product;
import com.project.repository.ProductRepository;



@Service
public class ProductServiceImpl implements ProductService {
	
	
	@Autowired
	private ProductRepository productRepo;
	
	
	

	@Override
	public Product saveProduct(Product product) {
		
		return productRepo.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		
		return productRepo.findAll();
	}

	@Override
	public Product getProductById(Integer id) {
		
		return productRepo.findById(id).get();
	}

	
	
	
	
	@Override
	public List<Product> getProductByProduct(String product) {
		
		return productRepo.findByProduct(product);
	}
	
	
	

	
	
	
	
	
	@Override
	public String deleteProduct(Integer id) {
		
		Product product = productRepo.findById(id).get();
		
		if(product != null)
		{
			productRepo.delete(product);
			return "Product Deleted Sucessfully";
		}
		return "Something Went Wrong";
		
	}

	@Override
	public Product editProduct(Product product, Integer id) {
		
		Product oldProduct = productRepo.findById(id).get();
		
		oldProduct.setProduct(product.getProduct());
		oldProduct.setBrand(product.getBrand());
		oldProduct.setPrice(product.getPrice());
		oldProduct.setWarehouse(product.getWarehouse());
		oldProduct.setSection(product.getSection());
		
		return productRepo.save(oldProduct);
	}

	

	
	}
	

