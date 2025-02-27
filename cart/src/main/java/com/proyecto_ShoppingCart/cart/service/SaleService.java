package com.proyecto_ShoppingCart.cart.service;


import com.proyecto_ShoppingCart.cart.entity.Cart;
import com.proyecto_ShoppingCart.cart.entity.Detail;
import com.proyecto_ShoppingCart.cart.entity.Sale;
import com.proyecto_ShoppingCart.cart.entity.User;
import com.proyecto_ShoppingCart.cart.repository.SaleRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Service
@Transactional
public class SaleService {
    private final SaleRepository saleRepository;
    private final UserService userService;
    private final CartService cartService;
    private final DetailService detailService;

    @Autowired
    public SaleService(SaleRepository saleRepository, UserService userService, CartService cartService, DetailService detailService) {
        this.saleRepository = saleRepository;
        this.userService = userService;
        this.cartService = cartService;
        this.detailService = detailService;
    }

    public List<Sale> getSalesByClient(String userName){
        return this.saleRepository.findByClient_UserName(userName);
    }
    public void createSale(String userName){
        User client = this.userService.getByUserName(userName).get();
        List<Cart> cartList = this.cartService.getListByClient(client.getUserName());
        DecimalFormat decimalFormat = new DecimalFormat("0.00", new DecimalFormatSymbols(Locale.US));
        decimalFormat.setRoundingMode(RoundingMode.DOWN);
       double total = cartList.stream().mapToDouble(cartItem -> cartItem.getProduct().getPrice()
                * cartItem.getAmount()).sum();
        Sale sale = new Sale(Double.parseDouble(decimalFormat.format(total)), new Date(), client);
        Sale saveSale = this.saleRepository.save(sale);
        for (Cart shoppingCart : cartList) {
            Detail detail = new Detail();
            detail.setProduct(shoppingCart.getProduct());
            detail.setAmount(shoppingCart.getAmount());
            detail.setSale(saveSale);
            this.detailService.createDetail(detail);
        }
        this.cartService.cleanCart(client.getId());
    }

}
