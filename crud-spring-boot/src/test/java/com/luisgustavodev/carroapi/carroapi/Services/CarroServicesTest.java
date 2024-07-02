package com.luisgustavodev.carroapi.carroapi.Services;

import com.luisgustavodev.carroapi.carroapi.Models.Carro;
import com.luisgustavodev.carroapi.carroapi.Repositories.CarroRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.mockito.Mockito.when;

@SpringBootTest
public class CarroServicesTest {

    @Autowired
    CarroServices carroServices;

    @MockBean
    CarroRepository carroRepository;

    @BeforeEach
    void setup() {
        Carro carro = new Carro();
        carro.setId(2L);
        when(carroRepository.findById(2L)).thenReturn(Optional.of(carro));
    }

    @Test
    void cenario1() {
        Carro carro = this.carroServices.findById(2L);
        Assertions.assertEquals(2L, carro.getId());
    }


}
