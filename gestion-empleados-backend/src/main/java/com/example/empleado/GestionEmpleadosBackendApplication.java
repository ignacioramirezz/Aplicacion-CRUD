package com.example.empleado;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class GestionEmpleadosBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionEmpleadosBackendApplication.class, args);
	}

}
