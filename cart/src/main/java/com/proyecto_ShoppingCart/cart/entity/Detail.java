package com.proyecto_ShoppingCart.cart.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Detail {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",strategy = "org.hibernate.id.UUIDGenerator")
    @Setter
    @Getter
    private String id;

    @ManyToOne(optional = false,cascade = CascadeType.DETACH,fetch = FetchType.EAGER)
    @Setter
    @Getter
    Product product;

    @ManyToOne(optional = false,cascade = CascadeType.DETACH,fetch = FetchType.EAGER)
    @Setter
    @Getter
    private Sale sale;

    @NotNull
    @Setter
    @Getter
    private int amount;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Sale getSale() {
        return sale;
    }

    public void setSale(Sale sale) {
        this.sale = sale;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
