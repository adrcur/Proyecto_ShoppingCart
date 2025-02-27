package com.proyecto_ShoppingCart.cart.repository;

import com.proyecto_ShoppingCart.cart.entity.Detail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DetailRepository extends JpaRepository<Detail,String> {

    List<Detail> findBySale_Id(String saleId);
}
