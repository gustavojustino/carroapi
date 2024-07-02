package com.luisgustavodev.carroapi.carroapi.Repositories;

import com.luisgustavodev.carroapi.carroapi.Models.Marca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarcaRepository extends JpaRepository<Marca, Long> {
    List<Marca> findAll();
}
