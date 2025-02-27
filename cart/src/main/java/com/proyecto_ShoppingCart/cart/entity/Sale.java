package com.proyecto_ShoppingCart.cart.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.hibernate.annotations.GenericGenerator;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Sale {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",strategy = "org.hibernate.id.UUIDGenerator")
    @Setter
    @Getter
    private String id;

    @NotNull
    @Getter @Setter
    private Double total;

    @NotNull
    @Getter @Setter
    @Column(columnDefinition = "DATE")
    private Date date;  

    @ManyToOne(optional = false,cascade = CascadeType.DETACH,fetch = FetchType.EAGER)
    @Getter @Setter
    private User client;

    public Sale(Double total, Date date, User client) {
        this.total = total;
        this.date = date;
        this.client = client;
    }
}
