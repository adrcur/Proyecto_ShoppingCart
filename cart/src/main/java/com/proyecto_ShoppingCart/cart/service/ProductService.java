package com.proyecto_ShoppingCart.cart.service;

import com.proyecto_ShoppingCart.cart.entity.Product;
import com.proyecto_ShoppingCart.cart.repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
@Transactional
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getRelatedProducts(String category, String productId){
        List<Product> productList =
                this.productRepository.
                        findByCategoryAndIdNot(category,productId);
        List<Product> randomProducts = new ArrayList<>();
        Random random = new Random();
        for(int i = 0; i < 2; i++){
            int randomIndex = random.nextInt(productList.size());
            randomProducts.add(productList.get(randomIndex));
            productList.remove(randomIndex);
        }
        return randomProducts;
    }


    public List<Product> getAllProducts(){
        return this.productRepository.findAll();
    }

    public Optional<Product> getProductById(String id){
        return this.productRepository.findById(id);
    }
    public List<Product> getBestPriceProducts(){
        return this.productRepository.findFirst4ByOrderByPriceAsc();
    }

}
