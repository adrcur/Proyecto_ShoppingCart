package com.proyecto_ShoppingCart.cart.repository;

import com.proyecto_ShoppingCart.cart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart,String> {

    List<Cart> findByClient_Id(String clientId);
    List<Cart> findByClient_UserName(String clientEmail);
    void deleteByClient_Id(String clientId);
    Long countByClient_Id(String id);

}
