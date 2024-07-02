package com.luisgustavodev.carroapi.carroapi.Services;

import com.luisgustavodev.carroapi.carroapi.Models.Marca;
import com.luisgustavodev.carroapi.carroapi.Repositories.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarcaServices {

    @Autowired
    MarcaRepository marcaRepository;

    public String save(Marca marca) {
        this.marcaRepository.save(marca);
        return "Marca salva com sucesso!";
    }

    public String update(Marca marca, long id) {
        marca.setId(id);
        this.marcaRepository.save(marca);
        return "Marca foi atualizada com sucesso";
    }

    public String delete(long id) {
        this.marcaRepository.deleteById(id);
        return "Marca deletada com sucesso";
    }

    public List<Marca> findAll() {
        List<Marca> lista = this.marcaRepository.findAll();
        return lista;
    }

    public Marca findById(long id) {
        Marca marca = this.marcaRepository.findById(id).get();
        return marca;
    }
}
