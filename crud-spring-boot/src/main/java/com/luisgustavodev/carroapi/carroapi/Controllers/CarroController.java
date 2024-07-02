package com.luisgustavodev.carroapi.carroapi.Controllers;

import com.luisgustavodev.carroapi.carroapi.Models.Carro;
import com.luisgustavodev.carroapi.carroapi.Services.CarroServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carro")
public class CarroController {

    @Autowired
    private CarroServices carroServices;

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USERS')")
    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Carro carro) {
       try {
           String mensagem = this.carroServices.save(carro);
           return new ResponseEntity<>(mensagem, HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
       }
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USERS')")
    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody Carro carro, @PathVariable long id) {
        try {
            String mensagem = this.carroServices.update(carro, id);
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable long id) {
        try {
            String mensagem = this.carroServices.delete(id);
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USERS')")
    @GetMapping("/findAll")
    public ResponseEntity<List<Carro>> findAll() {
        try {
            List <Carro> lista = this.carroServices.findAll();
            return new ResponseEntity<>(lista, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/findById/{id}")
    public ResponseEntity<Carro> findById(@PathVariable long id) {
        try {
            Carro carro = this.carroServices.findById(id);
            return new ResponseEntity<>(carro, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USERS')")
    @GetMapping("/findByNome/{nome}")
    public ResponseEntity<List<Carro>> findByNome(@PathVariable String nome) {
        try {
            List<Carro> lista  = this.carroServices.findByNome(nome);
            return new ResponseEntity<>(lista, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
