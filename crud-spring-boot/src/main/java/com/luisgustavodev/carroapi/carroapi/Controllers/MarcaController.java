package com.luisgustavodev.carroapi.carroapi.Controllers;

import com.luisgustavodev.carroapi.carroapi.Models.Marca;
import com.luisgustavodev.carroapi.carroapi.Services.MarcaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/marca")
public class MarcaController {

    @Autowired
    private MarcaServices marcaServices;

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USERS')")
    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Marca marca) {
        try {
            String mensagem = this.marcaServices.save(marca);
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USERS')")
    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody Marca marca, @PathVariable long id) {
        try {
            String mensagem = this.marcaServices.update(marca, id);
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable long id) {
        try {
            String mensagem = this.marcaServices.delete(id);
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USERS')")
    @GetMapping("/findAll")
    public ResponseEntity<List<Marca>> findAll() {
        try {
            List <Marca> lista = this.marcaServices.findAll();
            return new ResponseEntity<>(lista, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USERS')")
    @GetMapping("/findById/{id}")
    public ResponseEntity<Marca> findById(@PathVariable long id) {
        try {
            Marca marca = this.marcaServices.findById(id);
            return new ResponseEntity<>(marca, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

}