package com.luisgustavodev.carroapi.carroapi.Services;

import com.luisgustavodev.carroapi.carroapi.Models.Carro;
import com.luisgustavodev.carroapi.carroapi.Repositories.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarroServices {

    @Autowired
    private CarroRepository carroRepository;

    public String save(Carro carro) {
         this.carroRepository.save(carro);
        return "Carro salvo com sucesso!";
    }

    public String update(Carro carro, long id) {
        carro.setId(id);
        this.carroRepository.save(carro);
        return "Carro foi atualizado!";
    }

    public String delete(long id) {
        this.carroRepository.deleteById(id);
        return "Carro deletado com sucesso!";
    }

    public List<Carro> findAll() {
        List<Carro> lista = this.carroRepository.findAll();
        return lista;
    }

    public Carro findById(long id) {
       Carro carro = this.carroRepository.findById(id).get();
        return carro;
    }

    public List<Carro> findByNome(String nome) {
        List<Carro> lista = this.carroRepository.findByNome(nome);
        return lista;
    }


}
