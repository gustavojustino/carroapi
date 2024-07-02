package com.luisgustavodev.carroapi.carroapi.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity (name = "carro")
public class Carro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Integer ano;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "marca_id")
    private Marca marca;

//    @ManyToMany(cascade = CascadeType.ALL)
//    @JoinTable(name = "carro_proprietario")
//    @JsonManagedReference
//    private List<Proprietario> proprietario;
}
