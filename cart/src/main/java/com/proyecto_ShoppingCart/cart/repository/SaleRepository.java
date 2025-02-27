package com.proyecto_ShoppingCart.cart.repository;

import com.proyecto_ShoppingCart.cart.entity.Detail;
import com.proyecto_ShoppingCart.cart.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale,String> {

    List<Sale> findByClient_UserName(String userName);
}
