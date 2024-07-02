package com.luisgustavodev.carroapi.carroapi.config;

import io.github.cdimascio.dotenv.Dotenv;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtConfig {

    //Parâmetros para geração do token
    public static final Dotenv dotenv = Dotenv.load();

    public static final String SECRET_KEY = dotenv.get("SECRET_KEY");
    public static final SignatureAlgorithm ALGORITMO_ASSINATURA = SignatureAlgorithm.HS256;
    public static final int HORAS_EXPIRACAO_TOKEN = 1;

}