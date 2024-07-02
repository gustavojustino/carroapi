package com.luisgustavodev.carroapi.carroapi.Repositories;

import com.luisgustavodev.carroapi.carroapi.Models.Carro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarroRepository extends JpaRepository<Carro, Long> {

    public List<Carro> findByNome(String nome);
}
