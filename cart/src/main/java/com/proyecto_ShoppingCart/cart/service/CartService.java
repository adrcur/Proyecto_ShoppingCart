package com.proyecto_ShoppingCart.cart.service;

import com.proyecto_ShoppingCart.cart.entity.Cart;
import com.proyecto_ShoppingCart.cart.repository.CartRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CartService {
    private final CartRepository cartRepository;

    @Autowired
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public List<Cart> getListByClient(String userName){
        return this.cartRepository.findByClient_UserName(userName);
    }
    public void cleanCart(String clientId){
        this.cartRepository.deleteByClient_Id(clientId);
    }
    public void removeProduct(String id){
        this.cartRepository.deleteById(id);
    }
    public void addProduct(Cart cart){
        this.cartRepository.save(cart);
    }
    public Long getCountByClient(String clientId){
        return this.cartRepository.countByClient_Id(clientId);
    }


}
